import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";

export const InlineGroupStyles = css`
  ${display("flex")}

  :host {
    gap: calc(var(--spacing-unit) * 0.25);
    align-items: center;
    flex-wrap: wrap;
  }

  :host([nowrap]) {
    flex-wrap: nowrap;
  }


`;