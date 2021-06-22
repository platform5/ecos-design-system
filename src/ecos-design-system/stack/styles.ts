import { css } from '@microsoft/fast-element';

export const StackStyles = css`
  :host {
    display: block;
    /* contain: content; */
    --stack-margin-top: calc(var(--type-ramp-base-font-size) + ((var(--design-unit) * 2 * max(0, var(--density))) * 1px));
  }
  :host([large]) {
    --stack-margin-top: calc((var(--type-ramp-base-font-size) * 2) + ((var(--design-unit) * 2 * max(0, var(--density))) * 1px));
  }
  :host([small]) {
    --stack-margin-top: calc((var(--type-ramp-base-font-size) * 0.5) + ((var(--design-unit) * 2 * max(0, var(--density))) * 1px));  
  }
  ::slotted(p.stack-item) {
    margin-top: var(--stack-margin-top);
  }
`;