import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";
import { typeRampMinus1FontSize, typeRampMinus1LineHeight, typeRampMinus2FontSize, typeRampMinus2LineHeight } from "@microsoft/fast-components";

export const TableItemStyles = css`
  ${display("flex")}

  :host {
    flex-direction: column;
    justify-content: center;
    padding: var(--spacing-unit-sm);
    flex-shrink: 0;
    width: 100%;
    font-size: ${typeRampMinus1FontSize};
    line-height: ${typeRampMinus1LineHeight};
  }

  :host([meta]) {
    font-size: ${typeRampMinus2FontSize};
    line-height: ${typeRampMinus2LineHeight};
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