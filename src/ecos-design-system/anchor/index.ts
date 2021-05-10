import { FASTAnchor, AnchorStyles as styles } from '@microsoft/fast-components';
import { customElement } from '@microsoft/fast-element';
import { AnchorTemplate as template } from '@microsoft/fast-foundation';

@customElement({
  name: "ecos-anchor",
  template,
  styles,
  shadowOptions: {
      delegatesFocus: true,
  },
})
export class EcosAnchor extends FASTAnchor {}