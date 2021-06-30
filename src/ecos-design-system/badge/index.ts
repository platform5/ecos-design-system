import { badgeStyles as styles } from '@microsoft/fast-components';
import { attr, css } from '@microsoft/fast-element';
import { badgeTemplate as template, Badge, ElementDefinitionContext, FoundationElementDefinition } from '@microsoft/fast-foundation';
import { extendedBadgeStyles } from './styles';

export class EcosBadge extends Badge {

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