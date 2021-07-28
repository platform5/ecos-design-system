import { badgeStyles as styles } from '@microsoft/fast-components';
import { attr, css } from '@microsoft/fast-element';
import { applyMixins, badgeTemplate as template, Badge, ElementDefinitionContext, FoundationElementDefinition } from '@microsoft/fast-foundation';
import { extendedBadgeStyles } from './styles';
import { SecondaryImportantError } from '../mixins/secondary-important-error';

export class EcosBadge extends Badge {

  public connectedCallback(): void {
    super.connectedCallback();
    this.secondaryChanged();
    this.importantChanged();
    this.errorChanged();
  }

  @attr()
  public appearance = 'neutral';

  // overriding this method to avoid creating styles in the template
  public generateBadgeStyle = (): string => {
    return '';
  };
}

const overrideStyles = (context: ElementDefinitionContext, definition: FoundationElementDefinition) => {
  return css`
    ${styles(context, definition)}
    ${extendedBadgeStyles}
  `
}

export const ecosBadge = EcosBadge.compose({
  baseName: "badge",
  template,
  styles: overrideStyles
});

/**
 * Mark internal because exporting class and interface of the same name
 * confuses API documenter.
 * TODO: https://github.com/microsoft/fast/issues/3317
 * @internal
 */
/* eslint-disable-next-line */
export interface EcosBadge extends SecondaryImportantError, Badge {}
applyMixins(EcosBadge, SecondaryImportantError);