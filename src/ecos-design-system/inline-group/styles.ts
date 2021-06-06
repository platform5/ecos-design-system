import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";

export const InlineGroupStyles = css`
  ${display("flex")}

  :host {
    contain: content;
    gap: calc(var(--spacing-unit) * 0.25);
    align-items: center;
  }


`;