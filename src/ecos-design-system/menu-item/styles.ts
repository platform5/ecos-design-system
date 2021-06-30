import { css } from "@microsoft/fast-element";

export const maxRadiusCheckboxStyles = css`
  :host .checkbox {
    border-radius: calc(min(calc(var(--control-corner-radius) * 1px), 8px));
  }
`