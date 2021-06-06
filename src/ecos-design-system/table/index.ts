import { customElement, FASTElement } from '@microsoft/fast-element';
import { TableStyles as styles } from './styles';
import { TableTemplate as template } from './template';

@customElement({
  name: 'ecos-table',
  template,
  styles
})
export class EcosTable extends FASTElement {

}