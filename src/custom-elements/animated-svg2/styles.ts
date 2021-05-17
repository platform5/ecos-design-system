import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";
import { accentFillRestBehavior } from "@microsoft/fast-components";

export const AnimatedSVGStyles = css`
  ${display("block")}

  :host {
    fill: ${accentFillRestBehavior.var};
  }

`.withBehaviors(accentFillRestBehavior)