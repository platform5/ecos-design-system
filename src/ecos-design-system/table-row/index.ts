import { customElement, FASTElement, observable } from '@microsoft/fast-element';
import { TableRowStyles as styles } from './styles';
import { TableRowTemplate as template } from './template';

@customElement({
  name: 'ecos-table-row',
  template,
  styles
})
export class EcosTableRow extends FASTElement {

  public connectedCallback(): void {
    super.connectedCallback();
    this.expandedNodesChanged();
  }

  public expandedContainer: HTMLElement;
  @observable public expandedNodes: (HTMLElement | Node)[] = [];
  public expandedNodesChanged(): void {
    if (!this.expandedContainer) {
      return;
    }
    this.expandedContainer.classList.toggle('expanded', this.expandedNodes.length > 0)
  }

  // TODO: this should be applied via mixin
  // but I don't know how to do that
  public start: HTMLSlotElement;
  public startContainer: HTMLSpanElement;
  public handleStartContentChange(): void {
      this.startContainer.classList.toggle(
          "start",
          this.start.assignedNodes().length > 0
      );
  }

  public end: HTMLSlotElement;
  public endContainer: HTMLSpanElement;
  public handleEndContentChange(): void {
      this.endContainer.classList.toggle("end", this.end.assignedNodes().length > 0);
  }
}