import { customElement, FASTElement, attr } from '@microsoft/fast-element';
import { CollectionStyles as styles } from './styles';
import { CollectionTemplate as template } from './template';

@customElement({
  name: 'ecos-article-list',
  template,
  styles
})
export class EcosCollection extends FASTElement {
  
}