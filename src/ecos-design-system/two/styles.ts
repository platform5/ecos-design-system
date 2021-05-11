import { css } from '@microsoft/fast-element';

export const TwoStyles = css`

  .ecos-two {
    display: grid;
    contain: content;
    grid-gap: var(--spacing-unit);
    justify-items: center;
    text-align: center;
  }

  @media screen and (min-width: 732px) {
    .ecos-two {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      text-align: inherit;
    }
    .ecos-two.rightleft > :nth-child(1) {
      grid-column: 2;
      grid-row: 1;
    }
    .ecos-two.rightleft > :nth-child(2) {
      grid-row: 1;
      grid-column: 1;
    }
  }

`;