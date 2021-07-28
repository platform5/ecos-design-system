import { css } from '@microsoft/fast-element';
import { display, disabledCursor } from '@microsoft/fast-foundation';
import {
  accentFillRest,
  foregroundOnAccentRest
} from "@microsoft/fast-components";
import { accentFillRestDark50, accentFillRestDark100 } from '../design-tokens';

// copy from fast-components non exported variable
export const heightNumber =
    "(var(--base-height-multiplier) + var(--density)) * var(--design-unit)";

export const Button3dStyles = css`
  ${display('inline')}

  .control {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    transition: filter 250ms;
  }
  :host {
    contain: content;
  }
  
  :host([disabled]) {
    opacity: var(--disabled-opacity);
    cursor: ${disabledCursor};
  }
  .start,
  .end {
    display: flex;
  }
  .control.icon-only {
    padding: 0;
    line-height: 0;
  }
  ::slotted(svg) {
    ${
        /* Glyph size and margin-left is temporary -
        replace when adaptive typography is figured out */ ""
    } width: 16px;
    height: 16px;
    pointer-events: none;
  }
  .start {
    margin-inline-end: 11px;
  }
  .end {
    margin-inline-start: 11px;
  }


  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }
  .edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(
      to left,
      ${accentFillRestDark100} 0%,
      ${accentFillRestDark50} 8%,
      ${accentFillRestDark50} 92%,
      ${accentFillRestDark100} 100%
    );
  }
  .front {
    display: block;
    position: relative;
    padding: 12px 42px;
    border-radius: 12px;
    font-size: 1.25rem;
    color: ${foregroundOnAccentRest};;
    background: ${accentFillRest};
    will-change: transform;
    transform: translateY(-4px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }
  :host(:hover) {
    filter: brightness(110%);
  }
  :host(:hover) .front {
    transform: translateY(-6px);
    transition:
      transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }
  :host(:active) .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  :host(:hover) .shadow {
    transform: translateY(4px);
    transition:
      transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }
  :host(:active) .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  :host(:focus:not(:focus-visible)) {
    outline: none;
  }
`;