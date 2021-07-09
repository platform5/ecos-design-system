import { typeRampMinus2FontSize } from '@microsoft/fast-components';
import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";
import { accentLight100 } from '../recipes';

export const CalendarStyles = css`
  ${display("grid")}

  :host {
    contain: style;
    grid-gap: var(--spacing-unit-sm);
  }

  .header {
    display: grid;
    grid-template-columns: 1fr 1fr 50px 50px;
    grid-gap: var(--spacing-unit-sm);
  }

  .header ecos-select {
    min-width: 80px;
  }

  .weekdays,
  .days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: var(--spacing-unit-sm);
    font-size: ${typeRampMinus2FontSize};
  }
  .weekdays {
    justify-items: center;
  }

  .day {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: auto;
  }
  .day::part(control) {
    padding-left: 0;
    padding-right: 0;
  }
  .day:not(.current-month) {
    visibility: hidden;
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
  .today:hover::part(content)::before {
    display: none;
  }
`;