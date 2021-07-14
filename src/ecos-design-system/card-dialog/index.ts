import { customElement, FASTElement, observable, attr } from '@microsoft/fast-element';
import { EcosCardDialogTemplate as template } from './template';
import { EcosCardDialogStyles as styles } from './styles';

@customElement({
  name: 'ecos-card-dialog',
  template,
  styles
})
export class EcosCardDialog extends FASTElement{

  @attr({attribute: 'fill-color'})
  fillColor: 'lighten' | 'darken' | 'auto' | 'unset' | string = 'auto';

  @observable
  public headerNodes: (HTMLElement | Node)[] = [];

  @observable
  public footerNodes: (HTMLElement | Node)[] = [];

  @observable
  public footerLeftNodes: (HTMLElement | Node)[] = [];

  public hasHeader = false;
  public hasFooter = false;
  public headerRow: HTMLElement;
  public footerRow: HTMLElement;

  public connectedCallback(): void {
    super.connectedCallback();
    this.setHasHeaderFooter();
  }

  public headerNodesChanged(): void {
    this.setHasHeaderFooter();
  }

  public footerNodesChanged(): void {
    this.setHasHeaderFooter();
  }
  public footerLeftNodesChanged(): void {
    this.setHasHeaderFooter();
  }

  private setHasHeaderFooter(): void {
    this.hasHeader = this.headerNodes && this.headerNodes.filter(node => node instanceof HTMLElement).length > 0;
    this.hasFooter = 
      this.footerNodes &&this.footerNodes.filter(node => node instanceof HTMLElement).length > 0
      || this.footerLeftNodes &&this.footerLeftNodes.filter(node => node instanceof HTMLElement).length > 0;
      
    if (this.headerRow) {
      this.headerRow.style.setProperty('display', this.hasHeader ? 'grid' : 'none');
    }
    if (this.footerRow) {
      this.footerRow.style.setProperty('display', this.hasFooter ? 'grid' : 'none');
    }
    this.toggleAttribute('has-header', this.hasHeader);
    this.toggleAttribute('has-footer', this.hasFooter);
  }
}