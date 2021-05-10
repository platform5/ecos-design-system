import { customElement, FASTElement, attr } from '@microsoft/fast-element';
import { FormStyles as styles } from './styles';
import { FormTemplate as template } from './template';

@customElement({
  name: 'ecos-form-row',
  template,
  styles
})
export class EcosFormRow extends FASTElement {
  
}