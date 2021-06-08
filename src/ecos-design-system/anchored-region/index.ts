import { FASTAnchoredRegion, AnchoredRegionStyles as styles } from '@microsoft/fast-components';
import { customElement } from '@microsoft/fast-element';
import { AnchoredRegionTemplate as template } from '@microsoft/fast-foundation';


@customElement({
  name: "ecos-anchored-region",
  template,
  styles
})
export class EcosAnchoredRegion extends FASTAnchoredRegion {}