import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";

export const NextStyles = css`
  ${display("block")}

  :host {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  ::slotted(.next-item) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 1;
  }

  ::slotted(.next-item.animate) {
    -webkit-transition: transform var(--aurelia-ux--ar-next-animation-duration, 400ms) var(--aurelia-ux--ar-next-animation-leave-function, ease-in);
    transition: transform var(--aurelia-ux--ar-next-animation-duration, 400ms) var(--aurelia-ux--ar-next-animation-leave-function, ease-in);
  }
  
  ::slotted(.next-item.prev) {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  
  ::slotted(.next-item.next) {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  
  ::slotted(.next-item.animate.current) {
    z-index: 2;
    transition-timing-function: var(--aurelia-ux--ar-next-animation-enter-function, ease-in)
  }



  /* (desktop) mode */
  @media screen and (min-width: 732px) {
    
  }
`.withBehaviors(
  
);