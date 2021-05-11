import { attr, customElement, FASTElement } from '@microsoft/fast-element';
import { StackStyles as styles } from './styles';
import { StackTemplate as template } from './template';

@customElement({
  name: 'ecos-stack',
  template,
  styles
})
export class EcosStack extends FASTElement {

  @attr({mode: 'boolean'})
  small = false;

  @attr({mode: 'boolean'})
  large = false;

  @attr({mode: 'boolean'})
  inline = false;

}