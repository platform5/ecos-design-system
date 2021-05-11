import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";

export const ColorizeStyles = css`
  ${display("inline")}

  :host {
    position: relative;
    display: inline-block;
  }

  .colorizer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: currentColor;
    mix-blend-mode: lighten;
  }
`;