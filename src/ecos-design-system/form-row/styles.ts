import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";

export const FormStyles = css`
  ${display("flex")}

  :host {
    contain: content;
    flex-direction: column;
  }
`;