import { customElement, css } from '@microsoft/fast-element';
import { CheckboxTemplate as template } from '@microsoft/fast-foundation';
import { CheckboxStyles as styles, FASTCheckbox } from '@microsoft/fast-components';

const maxRadiusCheckboxStyles = css`
  :host .control {
    border-radius: calc(min(calc(var(--corner-radius) * 1px), 8px));
  }
`

@customElement({
  name: 'ecos-checkbox',
  template,
  styles: [styles, maxRadiusCheckboxStyles]
})
export class EcosCheckbox extends FASTCheckbox {

}