import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";

export const InlineGroupStyles = css`
  ${display("flex")}

  :host {
    gap: var(--spacing-unit);
    align-items: center;
    flex-wrap: wrap;
  }

  :host([nowrap]) {
    flex-wrap: nowrap;
  }


`;