import { css } from '@microsoft/fast-element';
import { checkboxTemplate as template, Checkbox, ElementDefinitionContext, FoundationElementDefinition } from '@microsoft/fast-foundation';
import { checkboxStyles as styles } from '@microsoft/fast-components';

const maxRadiusCheckboxStyles = css`
  :host .control {
    border-radius: calc(min(calc(var(--control-corner-radius) * 1px), 8px));
  }
`

const overrideStyles = (context: ElementDefinitionContext, definition: FoundationElementDefinition) => {
  return css`
    ${styles(context, definition)}
    ${maxRadiusCheckboxStyles}
  `
}

export const ecosCheckbox = Checkbox.compose({
  baseName: 'checkbox',
  template,
  styles: overrideStyles
});