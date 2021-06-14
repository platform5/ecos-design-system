import { customElement, inject, INode, bindable } from 'aurelia';
import { processContent, shadowCSS, ICustomElementViewModel, ICustomElementController } from '@aurelia/runtime-html';
import prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-typescript';
import prismStyles from '!css-loader!prismjs/themes/prism.css';
import templateStyles from '!!css-loader!./au-snippet.css';
import template from './au-snippet.html';

const shadowPrismStyles = shadowCSS(prismStyles, templateStyles);

@customElement({
  name: 'au-snippet', 
  template, 
  dependencies: [shadowPrismStyles], 
  shadowOptions: {mode: 'open'}})
@inject(Element)
export class AuSnippet implements ICustomElementViewModel {

  @bindable public enableOutput = false;
  @bindable public enableMultiple = false;
  @bindable public showShell: boolean | 'auto' = 'auto';
  @bindable public showTS: boolean | 'auto' = 'auto';
  @bindable public showHTML: boolean | 'auto' = 'auto';
  @bindable public showCSS: boolean | 'auto' = 'auto';
  @bindable public showOutput: boolean | 'auto' = 'auto';
  @bindable public fullWidthOutput = false;

  @bindable public theme: '' | 'dark' = '';

  private hasShell = false;
  private hasHTML = false;
  private hasCSS = false;
  private hasTS = false;

  readonly $controller?: ICustomElementController<this>
  
  public constructor(private element: Element) {

  }

  @processContent()
  public static processContent(node: INode): boolean {
    const children = node.childNodes;
    const el = node as Element;

    let hasOutputSlottedContent = false;
    for (const child of children) {
      hasOutputSlottedContent = hasOutputSlottedContent || (child instanceof HTMLElement && child.hasAttribute('au-slot') && child.getAttribute('au-slot') === 'output');
      if (hasOutputSlottedContent) {
        break;
      }
    }
    const outputElement = document.createElement('div');
    const stylesElement = document.createElement('div');


    for (const child of children) {
      if (child instanceof Element && child.hasAttribute('language')) {
        const language = child.getAttribute('language');
        let content = child.innerHTML;
        if (language === 'html' && !hasOutputSlottedContent) {
          outputElement.innerHTML = content,
          outputElement.setAttribute('au-slot', 'output');
          content = AuSnippet.decodeHtml(content);
          el.appendChild(outputElement);
        }
        if (language === 'css') {
          stylesElement.innerHTML = content;
          stylesElement.setAttribute('au-slot', 'styles');
          el.appendChild(stylesElement);
        }
        content = AuSnippet.dedent(content);
        if (content.trim() === '') {
          continue;
        }
        const highlighted = prism.highlight(content, prism.languages[language], language);
        child.innerHTML = `<pre class="language-${language}">${highlighted}</pre>`;
        child.setAttribute('au-slot', language);
        el.classList.add(`has-${language}`);
      }
    }
    return true;
  }

  public static getContent(el: Element, language: string): string {
    const raw = el.innerHTML;
    const processed = language === 'html' ? AuSnippet.decodeHtml(raw) : raw;
    return AuSnippet.dedent(processed);
  }

  public static dedent(str: string): string {
    const match = str.match(/^[ \t]*(?=\S)/gm);
    if (!match) return str;
  
    const indent = Math.min(...match.map((el) => {
      return el.length;
    }));
  
    const re = new RegExp('^[ \\t]{' + indent + '}', 'gm');
    return indent > 0 ? str.replace(re, '') : str;
  }

  public static decodeHtml(raw: string): string {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = raw;
    return textarea.value;
  }

  public attached(): void {
    this.hasShell = this.element.shadowRoot.querySelector('.shell > div') !== null;
    this.hasTS = this.element.shadowRoot.querySelector('.typescript > div') !== null;
    this.hasHTML = this.element.shadowRoot.querySelector('.html > div') !== null;
    this.hasCSS = this.element.shadowRoot.querySelector('.css > div') !== null;

    let showingSomething = false;
    if (this.hasShell && this.showShell === 'auto') {
      this.showShell = this.enableMultiple || !showingSomething;
      showingSomething = true;
    } else {
      this.showShell = false;
    }
    if (this.hasTS && this.showTS === 'auto') {
      this.showTS = this.enableMultiple || !showingSomething;
      showingSomething = true;
    } else {
      this.showTS = false;
    }
    if (this.hasHTML && this.showHTML === 'auto') {
      this.showHTML = this.enableMultiple || !showingSomething;
      showingSomething = true;
    } else {
      this.showHTML = false;
    }
    if (this.hasCSS && this.showCSS === 'auto') {
      this.showCSS = this.enableMultiple || !showingSomething;
      showingSomething = true;
    } else {
      this.showCSS = false;
    }
    if (this.enableOutput && this.showOutput === 'auto') {
      this.showOutput = true;
    } else {
      this.showOutput = false;
    }
    
    const stylesElement = this.element.shadowRoot.querySelector('.styles-content > div');

    const styles = document.querySelectorAll('style');
    for (const style of styles) {
      const content = style.innerHTML;
      if (content.indexOf('*,*::before,*::after{') === 0) {
        const resetStyleElement = document.createElement('style');
        resetStyleElement.innerHTML = content;
        this.element.shadowRoot.appendChild(resetStyleElement);
        break;
      }
    }

    if (stylesElement) {
      const styles = stylesElement.innerHTML;
      const styleElement = document.createElement('style');
      styleElement.innerHTML = styles;
      this.element.shadowRoot.appendChild(styleElement);
    }
  }

  public bound(): void {
    this.themeChanged();
  }

  public themeChanged(): void {
    // TODO: find a way to change the dependencies CSS
    // to use the dark prism theme
  }

  public toggle(what: 'shell' | 'ts' | 'html' | 'css' | 'output'): void {
    if (!this.enableMultiple) {
      this.showShell = false;
      this.showTS = false;
      this.showHTML = false;
      this.showCSS = false;
    }
    if (what === 'shell') {
      this.showShell = !this.showShell;
    } else if (what === 'ts') {
      this.showTS = !this.showTS;
    } else if (what === 'html') {
      this.showHTML = !this.showHTML;
    } else if (what === 'css') {
      this.showCSS = !this.showCSS;
    } else if (what === 'output') {
      this.showOutput = !this.showOutput;
    }
  }
}