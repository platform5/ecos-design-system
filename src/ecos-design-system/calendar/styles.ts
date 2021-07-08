import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";
import { accentLight100 } from '../recipes';

export const CalendarStyles = css`
  ${display("block")}

  :host {
    contain: style;
  }

  .days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: var(--spacing-unit-sm);
  }

  .day {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .today > span {
    display: inline-flex;
    background-color: ${accentLight100};
    color: var(--foreground-on-accent-active);
    width: 28px;
    height: 28px;
    border-radius: 28px;
    justify-content: center;
    align-items: center;
  }
`;