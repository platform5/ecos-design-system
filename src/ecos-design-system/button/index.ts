import { buttonStyles as styles } from '@microsoft/fast-components';
import { css } from '@microsoft/fast-element';
import { buttonTemplate as template, Button, ElementDefinitionContext, FoundationElementDefinition } from '@microsoft/fast-foundation';

export const extendPaddingWithRadiusStyles = css`
  .control {
    padding: 0 calc((10 + max(0, calc(var(--control-corner-radius) - 10)) + (var(--design-unit) * 2 * max(var(--density), 0)))  * 1px);
  }
  :host([small]) {
    height: calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 0.75px);
  }
`

const overrideStyles = (context: ElementDefinitionContext, definition: FoundationElementDefinition) => {
  return css`
    ${styles(context, definition)}
    ${extendPaddingWithRadiusStyles}
  `
}

export const ecosButton = Button.compose({
  baseName: 'button',
  template,
  styles: overrideStyles,
  shadowOptions: {
    delegatesFocus: true,
  },
});