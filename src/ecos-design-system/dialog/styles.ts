import { css } from '@microsoft/fast-element';

export const fadingStyles = css`
  :host {
    --dialog-transition-duration: 250ms;
  }
  :host(.ecos-dialog--fading) {
    opacity: 1;
    transition: opacity ease-in-out var(--dialog-transition-duration, 250ms);
  }
  :host(.ecos-dialog--fading[hidden]) {
    opacity: 0;
    display: block!important;
    pointer-events: none;
  }
  :host(.ecos-dialog--fading) .control {
    transform: scale(1);
    transition: transform ease-in-out var(--dialog-transition-duration, 250ms);
  }
  :host(.ecos-dialog--fading[hidden]) .control {
    transform: scale(0);
  }

  :host(.ecos-dialog--slide-up) {
    opacity: 1;
    transition: opacity ease-in-out var(--dialog-transition-duration, 250ms);
  }
  :host(.ecos-dialog--slide-up[hidden]) {
    opacity: 0;
    display: block!important;
    pointer-events: none;
  }
  :host(.ecos-dialog--slide-up) .control {
    transform: translateY(0);
    transition: transform ease-in-out var(--dialog-transition-duration, 250ms);
  }
  :host(.ecos-dialog--slide-up[hidden]) .control {
    transform: translateY(100vh);
  }
`;