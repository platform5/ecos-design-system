import { customElement, FASTElement } from '@microsoft/fast-element';
import { TextButtonStyles as styles } from './styles';
import { TextButtonTemplate as template } from './template';

@customElement({
  name: 'ecos-text-button',
  template,
  styles
})
export class EcosTextButton extends FASTElement {
  
}