import { customElement, FASTElement } from '@microsoft/fast-element';
import { CollectionStyles as styles } from './styles';
import { CollectionTemplate as template } from './template';

@customElement({
  name: 'ecos-collection',
  template,
  styles
})
export class EcosCollection extends FASTElement {
  
}