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
  :host([appearance=outline]) .control {
    background: transparent;
    color: ${neutralForegroundRestBehavior.var};
    border: calc(var(--outline-width) * 1px) solid ${neutralForegroundRestBehavior.var};
    border-radius: calc(var(--corner-radius) * 1px);
  }
`.withBehaviors(
  neutralFillRestBehavior,
  neutralForegroundRestBehavior,
  accentFillRestBehavior, 
  accentForegroundCutRestBehavior,
  accentLight100Behavior
);