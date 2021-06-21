import { FASTTextArea, TextAreaStyles as styles } from '@microsoft/fast-components';
import { customElement } from '@microsoft/fast-element';
import { TextAreaTemplate as template } from '@microsoft/fast-foundation';

@customElement({
  name: "ecos-text-area",
  template,
  styles,
  shadowOptions: {
      delegatesFocus: true,
  },
})
export class EcosTextArea extends FASTTextArea {}