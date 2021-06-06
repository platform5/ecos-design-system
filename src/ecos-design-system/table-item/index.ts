import { customElement, FASTElement } from '@microsoft/fast-element';
import { TableItemStyles as styles } from './styles';
import { TableItemTemplate as template } from './template';

@customElement({
  name: 'ecos-table-item',
  template,
  styles
})
export class EcosTableItem extends FASTElement {

}