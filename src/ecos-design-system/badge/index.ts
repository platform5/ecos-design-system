import { FASTBadge, BadgeStyles as styles } from '@microsoft/fast-components';
import { attr, customElement } from '@microsoft/fast-element';
import { BadgeTemplate as template } from '@microsoft/fast-foundation';
import { extendedBadgeStyles } from './styles';

@customElement({
  name: "ecos-badge",
  template,
  styles: [styles, extendedBadgeStyles]
})
export class EcosBadge extends FASTBadge {

  @attr()
  public appearance = 'neutral';

  // overriding this method to avoid creating styles in the template
  public generateBadgeStyle = (): string => {
    return '';
  };
}