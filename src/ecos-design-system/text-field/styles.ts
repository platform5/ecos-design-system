import { css } from '@microsoft/fast-element';

export const textFieldCalendarStyles = css`
  :host(.hide-picker-indicator) input[type="date"]::-webkit-inner-spin-button,
  :host(.hide-picker-indicator) input[type="date"]::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
  }
`;