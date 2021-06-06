import { customElement, FASTElement } from '@microsoft/fast-element';
import { TableRowStyles as styles } from './styles';
import { TableRowTemplate as template } from './template';

@customElement({
  name: 'ecos-table-row',
  template,
  styles
})
export class EcosTableRow extends FASTElement {

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