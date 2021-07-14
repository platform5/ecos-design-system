import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";

export const TableRowStyles = css`
  ${display("flex")}

  :host {
    display: grid;
    grid-gap: var(--spacing-unit);
    grid-template-columns: min-content 1fr min-content;
    align-items: center;
  }

  .start {
    flex-shrink: 0;
  }

  .end {
    flex-shring: 0;
    margin-left: auto;
  }

  .content {
    display: flex;
    gap: var(--spacing-unit);
    row-gap: 0;
    flex-wrap: wrap;
    width: 100%;
  }

  .expanded {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 2;
  }

  @media screen and (min-width: 732px) {
    :host {
      
    }
    .content {
      row-gap: var(--spacing-unit-sm);
    }
  }
`;