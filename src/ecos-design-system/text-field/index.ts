import { FASTTextField, TextFieldStyles as styles } from '@microsoft/fast-components';
import { customElement } from '@microsoft/fast-element';
import { TextFieldTemplate as template } from '@microsoft/fast-foundation';

@customElement({
  name: "ecos-text-field",
  template,
  styles,
  shadowOptions: {
      delegatesFocus: true,
  },
})
export class EcosTextField extends FASTTextField {}