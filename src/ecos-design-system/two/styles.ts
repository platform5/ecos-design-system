import { css } from '@microsoft/fast-element';

export const TwoStyles = css`

  :host {
    display: grid;
    contain: style;
    grid-gap: var(--spacing-unit-xl);
    justify-items: center;
    text-align: center;
  }

  @media screen and (min-width: 732px) {
    :host {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      text-align: inherit;
    }
    :host([rightleft]) ::slotted(:nth-child(1)) {
      grid-column: 2;
      grid-row: 1;
    }
    :host([rightleft]) ::slotted(:nth-child(2)) {
      grid-row: 1;
      grid-column: 1;
    }
  }

`;