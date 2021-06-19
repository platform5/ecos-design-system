// based on https://www.joshwcomeau.com/css/full-bleed/
// important: needs the utilities.css styles imported
import { customElement, FASTElement, attr, observable } from '@microsoft/fast-element';
import { SectionStyles as styles } from './styles';
import { SectionTemplate as template } from './template';
import { StackStyles as stackStyles } from '../stack/styles';
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

}