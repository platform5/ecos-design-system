import { css } from '@microsoft/fast-element';
import {
  neutralFillRestBehavior,
  neutralForegroundRestBehavior,
  accentFillRestBehavior,
  accentForegroundCutRestBehavior
} from "@microsoft/fast-components";
import { accentLight100Behavior } from '../recipes';

export const extendedBadgeStyles = css`
  .control {
    background: ${neutralFillRestBehavior.var};
    color: ${neutralForegroundRestBehavior.var};
  }
  :host([appearance=accent]) .control {
    background: ${accentFillRestBehavior.var};
    color: ${accentForegroundCutRestBehavior.var};
  }
  :host([appearance=accent-light]) .control {
    background: ${accentLight100Behavior.var};
    color: ${accentForegroundCutRestBehavior.var};
  }
`.withBehaviors(
  neutralFillRestBehavior,
  neutralForegroundRestBehavior,
  accentFillRestBehavior, 
  accentForegroundCutRestBehavior,
  accentLight100Behavior
);