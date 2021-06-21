import { EcosDialog } from './../ecos-design-system/dialog/index';
import { IContainer, Registration, IPlatform } from 'aurelia';
import { IDialogDomRenderer, IDialogLoadedSettings, IDialogDom, DefaultDialogDom } from '@aurelia/runtime-html';

const baseWrapperCss = 'position:absolute;width:100%;height:100%;top:0;left:0;';

export class EcosDialogRenderer implements IDialogDomRenderer {

  private readonly wrapperCss: string = `${baseWrapperCss} display:flex;`;
  private readonly overlayCss: string = baseWrapperCss;
  private readonly hostCss: string = 'position:relative;margin:auto;';

  public static register(container: IContainer): void {
    Registration.singleton(IDialogDomRenderer, this).register(container);
  }

  protected static inject = [IPlatform];
  public constructor(private readonly p: IPlatform) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public render(dialogHost: Element, settings: IDialogLoadedSettings): IDialogDom {
    // return this.defaultRender(dialogHost);
    return this.fastRender(dialogHost, settings);
  }

  public fastRender(dialogHost: Element, settings: IDialogLoadedSettings): IDialogDom {
    const doc = this.p.document;
    dialogHost = dialogHost.closest('ecos-design-system-provider') ? dialogHost : doc.querySelector('ecos-design-system-provider');
    const dialog = doc.createElement('ecos-dialog') as EcosDialog;
    dialog.setAttribute('effect', 'fading');
    dialog.toggleAttribute('hidden', true);
    dialog.style.setProperty('position', 'absolute');
    dialog.style.setProperty('z-index', settings.startingZIndex.toString());
    dialog.classList.add('auto-height');
    dialogHost.appendChild(dialog);
    this.p.domReadQueue.queueTask(() => {
      dialog.toggleAttribute('hidden', false);
    });
    return new EcosDialogDom(dialog, dialog, dialog);
  }

  public defaultRender(dialogHost: Element): IDialogDom {
    const doc = this.p.document;
    const h = (name: string, css: string) => {
      const el = doc.createElement(name);
      el.style.cssText = css;
      return el;
    };
    const wrapper = dialogHost.appendChild(h('au-dialog-container', this.wrapperCss));
    const overlay = wrapper.appendChild(h('au-dialog-overlay', this.overlayCss));
    const host = wrapper.appendChild(h('div', this.hostCss));
    return new DefaultDialogDom(wrapper, overlay, host);
  }
}

export class EcosDialogDom implements IDialogDom {
  public constructor(
    public readonly dialog: EcosDialog,
    public readonly overlay: HTMLElement,
    public readonly contentHost: HTMLElement,
  ) {
  }

  public dispose(): void {
    this.dialog.addEventListener('transitionend', this, {once: true});
    this.dialog.toggleAttribute('hidden', true);
  }

  public handleEvent(): void {
    this.dialog.remove();
  }
}