import { fillColor, accentForegroundRest, accentForegroundHover } from '@microsoft/fast-components';
import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";
import { accentLight100 } from '../recipes';

export const DateFieldStyles = css`
  ${display("grid")}

  :host {
    contain: style;
    grid-gap: var(--spacing-unit-sm);
  }

  :host([disabled]) .calendar-icon {
    display: none;
  }
  .calendar-icon {
    cursor: pointer;
    color: ${accentForegroundRest};
  }
  .calendar-icon: hover {
    color: ${accentForegroundHover};
  }

  .picker[hidden] {
    display: none;
  }
  .picker {
    padding: var(--spacing-unit-sm);
    background: ${fillColor};
    border-radius: calc(var(--control-corner-radius) * 1px);
    z-index: 1;
  }

  .calendar {
  }
`;