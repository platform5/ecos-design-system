import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";

export const TextButtonStyles = css`
  ${display("grid")}

  :host {
    contain: content;
    grid-gap: var(--responsive-spacing-unit-lg);
    grid-template-columns: 1fr min-content;
    align-items: center;
  }
`;