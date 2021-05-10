import { accentFillRestBehavior, accentForegroundCutRestBehavior, accentFillHoverBehavior, accentFillActiveBehavior, neutralFocusInnerAccentBehavior, neutralFillRestBehavior, neutralForegroundRestBehavior, neutralFillHoverBehavior, neutralFillActiveBehavior, accentForegroundRestBehavior, accentForegroundHoverBehavior, accentForegroundActiveBehavior } from "@microsoft/fast-components";
import { css } from '@microsoft/fast-element';

export const IconStyles = css`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    contain: content;
    stroke-width: 1px;
  }
  span {
    display:inline-flex;
    align-items: center;
    justify-content: center;
    contain: content;
    stroke-width: 1px;
  }
  .button {
    margin: 4px;
    padding: 8px;
    background: ${neutralFillRestBehavior.var};
    color: ${neutralForegroundRestBehavior.var};
    border-radius: calc(var(--corner-radius) * 1px);
    cursor: pointer;
  }
  .button:hover {
    background: ${neutralFillHoverBehavior.var};
  }
  .button:active {
    background: ${neutralFillActiveBehavior.var};
  }
  .button.disabled {
    background: ${neutralFillRestBehavior.var};
  }
  .button.lightweight {
    background: transparent;
    color: ${accentForegroundRestBehavior.var};
  }
  .button.lightweight:hover {
    color: ${accentForegroundHoverBehavior.var};
  }
  .button.lightweight:active {
    color: ${accentForegroundActiveBehavior.var};
  }
  .button.accent {
    margin: 4px;
    padding: 8px;
    background: ${accentFillRestBehavior.var};
    color: ${accentForegroundCutRestBehavior.var};
    box-shadow: 0 0 0 calc(var(--focus-outline-width) * 1px) inset ${neutralFocusInnerAccentBehavior.var};
    border-radius: calc(var(--corner-radius) * 1px);
  }
  .button.accent:hover {
    background: ${accentFillHoverBehavior.var};
  }
  .button.accent:active {
    background: ${accentFillActiveBehavior.var};
  }
  .button.accent.disabled {
    background: ${accentFillRestBehavior.var};
  }
`.withBehaviors(
  neutralFillRestBehavior,
  neutralForegroundRestBehavior,
  neutralFillHoverBehavior,
  neutralFillActiveBehavior,
  accentFillRestBehavior,
  accentForegroundCutRestBehavior,
  accentForegroundHoverBehavior,
  accentForegroundActiveBehavior,
  neutralFocusInnerAccentBehavior,
  accentFillActiveBehavior,
  accentForegroundRestBehavior
);