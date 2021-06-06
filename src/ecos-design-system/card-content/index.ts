import { customElement, FASTElement } from '@microsoft/fast-element';
import { CardContentStyles as styles } from './styles';
import { CardContentTemplate as template } from './template';

@customElement({
  name: 'ecos-card-content',
  template,
  styles
})
export class EcosCardContent extends FASTElement {
  
}