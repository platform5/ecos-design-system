import { neutralLayerFloating, neutralLayer3, neutralFillActive, neutralStrokeRest } from '@microsoft/fast-components';
import { css } from '@microsoft/fast-element';

export const menuSeparatedStyles = css`
:host([separated]) {
  background: transparent;
  border: none;
  box-shadow: none;
}

:host([separated]) ::slotted(ecos-menu-item) {
  border-radius: calc(var(--control-corner-radius) * 1px);
  background-color: ${neutralLayerFloating};
  margin-left: 0;
  margin-right: 0;
  /* min-height: calc(var(--spacing-unit-xl) * 1.5); */
  margin-top: 8px;
}
:host([separated]) ::slotted(ecos-menu-item:hover) {
  border-radius: calc(var(--control-corner-radius) * 1px);
  background: ${neutralLayer3};
}
:host([separated]) ::slotted(ecos-menu-item:first-child) {
  margin-top: 0px;
}
`;

export const menuBorderedStyles = css`
:host([bordered]) {
  background: transparent;
  border: none;
  box-shadow: none;
}

:host([bordered]) ::slotted(ecos-menu-item) {
  border-radius: 0;
  margin-left: 0;
  margin-right: 0;
  min-height: calc(var(--spacing-unit-xl) * 1.5);
  border-top: 1px solid ${neutralStrokeRest};
}
:host([bordered]) ::slotted(ecos-menu-item:hover) {
  background: ${neutralLayer3}
}
:host([bordered]) ::slotted(ecos-menu-item:first-child) {
  border-top: none;
}
:host([bordered]) ::slotted(ecos-menu-item[aria-checked="true"]), 
:host([bordered]) ::slotted(ecos-menu-item:active), 
:host([bordered]) ::slotted(ecos-menu-item.expanded) {
  background: ${neutralFillActive}
}
`;
