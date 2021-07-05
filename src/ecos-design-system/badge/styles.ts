import { css } from '@microsoft/fast-element';
import {
  neutralFillRest,
  neutralForegroundRest,
  accentFillRest,
  foregroundOnAccentRest
} from "@microsoft/fast-components";
import { accentLight100 } from '../recipes';

export const extendedBadgeStyles = css`
  .control {
    background: ${neutralFillRest};
    color: ${neutralForegroundRest};
  }
  :host([appearance=accent]) .control {
    background: ${accentFillRest};
    color: ${foregroundOnAccentRest};
  }
  :host([appearance=accent-light]) .control {
    background: ${accentLight100};
    color: ${foregroundOnAccentRest};
  }
  :host([appearance=outline]) .control {
    background: transparent;
    color: ${neutralForegroundRest};
    border: calc(var(--stroke-width) * 1px) solid ${neutralForegroundRest};
    border-radius: calc(var(--control-corner-radius) * 1px);
  }
`;