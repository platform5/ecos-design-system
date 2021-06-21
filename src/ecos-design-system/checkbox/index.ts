import { customElement } from '@microsoft/fast-element';
import { CheckboxTemplate as template } from '@microsoft/fast-foundation';
import { CheckboxStyles as styles, FASTCheckbox } from '@microsoft/fast-components';

@customElement({
  name: 'ecos-checkbox',
  template,
  styles
})
export class EcosCheckbox extends FASTCheckbox {

}