import { css } from '@microsoft/fast-element';

export const StackStyles = css`
  
  .ecos-stack {
    display: block;
    contain: content;
  }
  .ecos-stack > * + *:not(.breath) {
    margin-top: calc(var(--type-ramp-base-font-size) + ((var(--design-unit) * 2 * max(0, var(--density))) * 1px));
  }
  .ecos-stack-large > * + *:not(.breath) {
    margin-top: calc((var(--type-ramp-base-font-size) * 2) + ((var(--design-unit) * 2 * max(0, var(--density))) * 1px));
  }
  .ecos-stack-small > * + *:not(.breath) {
    margin-top: calc((var(--type-ramp-base-font-size) * 0.5) + ((var(--design-unit) * 2 * max(0, var(--density))) * 1px));  
  }

`;