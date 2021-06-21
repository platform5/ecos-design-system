import { customElement } from '@microsoft/fast-element';
import { RadioTemplate as template, RadioGroupTemplate as groupTemplate } from '@microsoft/fast-foundation';
import { RadioStyles as styles, FASTRadio, RadioGroupStyles as groupStyles, FASTRadioGroup } from '@microsoft/fast-components';

@customElement({
  name: 'ecos-radio',
  template,
  styles
})
export class EcosRadio extends FASTRadio {

}

@customElement({
  name: 'ecos-radio-group',
  template: groupTemplate,
  styles: groupStyles
})
export class EcosRadioGroup extends FASTRadioGroup {

}