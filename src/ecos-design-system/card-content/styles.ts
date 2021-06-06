import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";

export const CardContentStyles = css`
  ${display("block")}
  :host {
    contain: content;
    padding: calc(var(--spacing-unit) * 0.5);
  }
`;