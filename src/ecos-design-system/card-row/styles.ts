import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";

export const CardRowStyles = css`
  ${display("grid")}

  :host {
    contain: content;
    grid-gap: calc(var(--spacing-unit) * 0.5);
    grid-template-columns: 1fr min-content;
    padding: calc(var(--spacing-unit) * 0.5);
    align-items: center;
  }
`;