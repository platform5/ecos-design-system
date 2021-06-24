import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";

export const TableItemStyles = css`
  ${display("flex")}

  :host {
    flex-direction: column;
    justify-content: center;
    padding: var(--spacing-unit-sm);
    flex-shrink: 0;
    width: 100%;
  }

  :host([meta]) {
    font-size: 80%;
  }

  label {
    display: block;
    text-transform: uppercase;
    opacity: 0.5;
  }

  @media screen and (min-width: 732px) {
    :host {
      width: 200px;
    }
    :host([small]) {
      width: 100px;
    }
  }
`;