import { buttonStyles as styles, Button, accentFillHover, accentFillFocus, foregroundOnAccentHover, foregroundOnAccentFocus } from '@microsoft/fast-components';
import { css } from '@microsoft/fast-element';
import { buttonTemplate as template, ElementDefinitionContext, FoundationElementDefinition, applyMixins, focusVisible } from '@microsoft/fast-foundation';
import { SecondaryImportantError } from '../mixins/secondary-important-error';

export const extendPaddingWithRadiusStyles = css`
  .control {
    padding: 0 calc((10 + max(0, calc(var(--control-corner-radius) - 10)) + (var(--design-unit) * 2 * max(var(--density), 0)))  * 1px);
  }
  :host([small]) {
    height: calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 0.75px);
  }
`;

export const iconButtonStyles = css`
:host([icon]) {
  width: 40px;
  height: 40px;
}
:host([appearance=lightweight][hover-fill]) .control {
  padding: 0 calc((10 + max(0, calc(var(--control-corner-radius) - 10)) + (var(--design-unit) * 2 * max(var(--density), 0))) * 1px);
}
:host([icon]) .control {
  padding: 0;
}
:host([icon]) .content {
  display: flex;
}
:host([appearance=lightweight][icon]) span.content::before,
:host([appearance=lightweight][hover-fill]) span.content::before,
:host([appearance=lightweight][icon]) .control:${focusVisible} span.content::before,
:host([appearance=lightweight][hover-fill]) .control:${focusVisible} span.content::before {
  background: transparent;
}
:host([appearance=lightweight][icon]:hover),
:host([appearance=lightweight][hover-fill]:hover) {
  background: ${accentFillHover};
  color: ${foregroundOnAccentHover};
}
:host([appearance=lightweight][icon]:focus),
:host([appearance=lightweight][hover-fill]:focus) {
  background: ${accentFillFocus};
  color: ${foregroundOnAccentFocus};
}
`;

const overrideStyles = (context: ElementDefinitionContext, definition: FoundationElementDefinition) => {
  return css`
    ${styles(context, definition)}
    ${extendPaddingWithRadiusStyles}
    ${iconButtonStyles}
  `
}

export class EcosButton extends Button {

  public connectedCallback(): void {
    super.connectedCallback();
    this.secondaryChanged();
    this.importantChanged();
    this.errorChanged();
  }

}

export const ecosButton = EcosButton.compose({
  baseName: 'button',
  template,
  styles: overrideStyles,
  shadowOptions: {
    delegatesFocus: true,
  },
});


/**
 * Mark internal because exporting class and interface of the same name
 * confuses API documenter.
 * TODO: https://github.com/microsoft/fast/issues/3317
 * @internal
 */
/* eslint-disable-next-line */
export interface EcosButton extends SecondaryImportantError, Button {}
applyMixins(EcosButton, SecondaryImportantError);