import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";

export const TableRowStyles = css`
  ${display("flex")}

  :host {
    display: flex;
    gap: calc(var(--spacing-unit) * 0.5);
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
    gap: calc(var(--spacing-unit) * 0.5);
    row-gap: 0;
    flex-wrap: wrap;
    width: 100%;
  }

  @media screen and (min-width: 732px) {
    :host {
      
    }
    .content {
      row-gap: calc(var(--spacing-unit) * 0.25);
    }
  }
`;