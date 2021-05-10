import { FASTCard, CardStyles as styles } from '@microsoft/fast-components';
import { customElement } from '@microsoft/fast-element';
import { CardTemplate as template } from '@microsoft/fast-foundation';

@customElement({
  name: "ecos-card",
  template,
  styles,
  shadowOptions: {
      delegatesFocus: true,
  },
})
export class EcosCard extends FASTCard {}