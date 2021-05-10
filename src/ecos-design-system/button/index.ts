import { FASTButton, ButtonStyles as styles } from '@microsoft/fast-components';
import { customElement, css } from '@microsoft/fast-element';
import { ButtonTemplate as template } from '@microsoft/fast-foundation';

export const extendPaddingWithRadiusStyles = css`
  .control {
    padding: 0 calc((10 + max(0, calc(var(--corner-radius) - 10)) + (var(--design-unit) * 2 * max(var(--density), 0)))  * 1px);
  }
`

@customElement({
  name: "ecos-button",
  template,
  styles: [styles, extendPaddingWithRadiusStyles],
  shadowOptions: {
      delegatesFocus: true,
  },
})
export class EcosButton extends FASTButton {}