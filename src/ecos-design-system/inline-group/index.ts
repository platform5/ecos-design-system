import { customElement, FASTElement } from '@microsoft/fast-element';
import { InlineGroupStyles as styles } from './styles';
import { InlineGroupTemplate as template } from './template';

@customElement({
  name: 'ecos-inline-group',
  template,
  styles
})
export class EcosInlineGroup extends FASTElement {
  
}