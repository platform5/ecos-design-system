import { customElement, FASTElement, attr } from '@microsoft/fast-element';
import { TwoStyles as styles } from './styles';
import { TwoTemplate as template } from './template';

@customElement({
  name: 'ecos-two',
  template,
  styles,
  shadowOptions: null
})
export class EcosTwo extends FASTElement {

  @attr({mode: 'boolean'})
  rightleft = false;

}