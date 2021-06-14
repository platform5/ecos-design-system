import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";

export const ContentStyles = css`
  ${display("block")}
  :host {
    contain: content;
    padding: calc(var(--spacing-unit) * 0.5);
  }
`;