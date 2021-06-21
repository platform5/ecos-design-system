import { customElement } from '@microsoft/fast-element';
import { RadioTemplate as template } from '@microsoft/fast-foundation';
import { RadioStyles as styles, FASTRadio } from '@microsoft/fast-components';

@customElement({
  name: 'ecos-radio',
  template,
  styles
})
export class EcosRadio extends FASTRadio {

}