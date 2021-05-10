import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";
import { neutralLayerL1Behavior, neutralLayerL4Behavior, neutralForegroundRestBehavior } from '@microsoft/fast-components';

// copy from fast-components non exported variable
const heightNumber =
    "(var(--base-height-multiplier) + var(--density)) * var(--design-unit)";

export const ArticleStyles = css`
  ${display("flex")}

  :host {
    contain: content;
    overflow: hidden;
    cursor: pointer;
    flex-direction: column;
    border-radius: calc(var(--corner-radius) * 1px);
  }
  .image {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-top: 56.25%;
    border-bottom-left-radius: calc(var(--corner-radius) * 1px);
    border-bottom-right-radius: calc(var(--corner-radius) * 1px);
  }
  .image-background {
    position: absolute;
    width: 100%;
    height: 100%;
    margin-top: -56.25%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 250ms ease;
  }
  :host(:hover) .image-background {
    transform: scale(1.05) translate(-1.25%, -1.25%);
    opacity: 0.8;
  }
  .button {
    margin-top: calc((${heightNumber}) * -0.5px);
    text-align: right;
    margin-right: calc((${heightNumber}) * 0.5px);
    position: relative;
    z-index: 1;
  }
  .content {
    padding: calc((${heightNumber}) * 0.25px) calc((${heightNumber}) * 0.5px) calc((${heightNumber}) * 0.5px);
  }
`.withBehaviors(
  neutralLayerL1Behavior,
  neutralLayerL4Behavior, 
  neutralForegroundRestBehavior
);