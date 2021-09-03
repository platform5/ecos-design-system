// based on https://www.joshwcomeau.com/css/full-bleed/
// important: needs the utilities.css styles imported
import { customElement, FASTElement, attr, observable } from '@microsoft/fast-element';
import { SectionStyles as styles } from './styles';
import { SectionTemplate as template } from './template';
import { StackStyles as stackStyles } from '../stack/styles';
import { parseColorHexRGB, lightenViaLAB, darkenViaLAB, ColorRGBA64 } from '@microsoft/fast-colors';
import { SwatchRGB, fillColor, isDark } from '@microsoft/fast-components';
// import '../stack/styles.css';
// import './styles.css';

@customElement({
  name: 'ecos-section',
  template,
  styles: [stackStyles, styles],
  shadowOptions: {
    mode: 'open'
  }
})
export class EcosSection extends FASTElement {

  @attr({mode: 'boolean'})
  public stacked = true;

  @attr()
  public centerwidth = '65ch';

  @observable nodes: Node[];

  public stackedChanged(): void {
    this.setStackItems();
  }

  public nodesChanged(): void {
    this.setStackItems();
  }

  public setStackItems(): void {
    if (!this.nodes) {
      return;
    }
    let foundOne = false;
    this.nodes.forEach((node) => {
      if (node instanceof HTMLElement) {
        node.classList.add('section-item');
        if (foundOne && this.stacked) {
          node.classList.add('stack-item');
        } else {
          node.classList.remove('stack-item');
        }
        foundOne = true;
      }
    });
  }

  public connectedCallback(): void {
    super.connectedCallback();
    this.fillColorChanged();
  }
  
  @attr({attribute: 'fill-color'})
  fillColor: 'lighten' | 'darken' | 'auto' | 'unset' | string = 'auto';

  public fillColorChanged(): void {
    if (this.fillColor === 'unset') {
      this.unsetFillcolor();
    } else if (['lighten', 'darken', 'auto'].includes(this.fillColor)) {
      this.autoFillColor(this.fillColor as 'lighten' | 'darken' | 'auto');
    } else {
      this.setFillColor(this.fillColor);
    }
    try {
      const color = parseColorHexRGB(this.fillColor);
      if (color) {
        const swatch = SwatchRGB.create(color.r, color.g, color.b);
        fillColor.setValueFor(this, swatch);
      }
    } catch (error) {
      console.warn('Failed to process fillColorChanged', this.fillColor)
    }
  }

  private autoFillColor(action: 'lighten' | 'darken' | 'auto'): void {

    try {
      fillColor.setValueFor(this, (element) => {
        const parentFillColor = fillColor.getValueFor(this.parentElement || this.ownerDocument.body) as SwatchRGB;
        let effectiveAction = action;
        if (action === 'auto') {
          if (isDark(parentFillColor)) {
            effectiveAction = 'lighten';
          } else if(parentFillColor.r === 1 && parentFillColor.g === 1 && parentFillColor.b === 1) {
            // isWhite
            effectiveAction = 'darken';
          } else {
            effectiveAction = 'lighten';
          }
        }

        const fill = fillColor.getValueFor(element.parentElement || element.ownerDocument.body) as SwatchRGB;
        const fillcolor = new ColorRGBA64(fill.r, fill.g, fill.b);
        const newFill = effectiveAction === 'lighten' ? lightenViaLAB(fillcolor, 0.2) : darkenViaLAB(fillcolor, 0.2);
        const swatch = SwatchRGB.create(newFill.r, newFill.g, newFill.b);
        return swatch;
      });
    } catch (error) {
      console.warn('Failed to process fillColor design token', this.fillColor);
    }
  }

  private unsetFillcolor(): void {
    fillColor.deleteValueFor(this);
  }

  private setFillColor(color: string): void {
    try {
      const parsedColor = parseColorHexRGB(color);
      if (parsedColor) {
        const swatch = SwatchRGB.create(parsedColor.r, parsedColor.g, parsedColor.b);
        fillColor.setValueFor(this, swatch);
      }
    } catch (error) {
      console.warn('Failed to process fillColorChanged', color)
    }
  }

}