import { customElement, FASTElement } from '@microsoft/fast-element';
import { ContentStyles as styles } from './styles';
import { ContentTemplate as template } from './template';

@customElement({
  name: 'ecos-content',
  template,
  styles
})
export class EcosContent extends FASTElement {
  
}