import { FASTSlider, SliderStyles as styles } from '@microsoft/fast-components';
import { customElement } from '@microsoft/fast-element';
import { SliderTemplate as template } from '@microsoft/fast-foundation';

@customElement({
  name: "ecos-slider",
  template,
  styles
})
export class EcosSlider extends FASTSlider {}