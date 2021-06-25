import { FASTMenu, MenuStyles as styles, neutralLayerFloatingBehavior, neutralForegroundHoverBehavior, neutralFillHoverBehavior, neutralFillSelectedBehavior, neutralOutlineRestBehavior } from '@microsoft/fast-components';
import { customElement, css } from '@microsoft/fast-element';
import { MenuTemplate as template } from '@microsoft/fast-foundation';

export const menuSeparatedStyles = css`
:host([separated]) {
  background: transparent;
  border: none;
  box-shadow: none;
}

:host([separated]) ::slotted(ecos-menu-item) {
  border-radius: calc(var(--corner-radius) * 1px);
  background-color: ${neutralLayerFloatingBehavior.var};
  margin-left: 0;
  margin-right: 0;
  /* min-height: calc(var(--spacing-unit-xl) * 1.5); */
  margin-top: 8px;
}
:host([separated]) ::slotted(ecos-menu-item:hover) {
  border-radius: calc(var(--corner-radius) * 1px);
  background: var(--neutral-layer-l3);
  color: ${neutralForegroundHoverBehavior.var};
}
:host([separated]) ::slotted(ecos-menu-item:first-child) {
  margin-top: 0px;
}
`.withBehaviors(neutralLayerFloatingBehavior, neutralForegroundHoverBehavior)

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
  border-top: 1px solid ${neutralOutlineRestBehavior.var};
}
:host([bordered]) ::slotted(ecos-menu-item:hover) {
  background: ${neutralFillHoverBehavior.var}
}
:host([bordered]) ::slotted(ecos-menu-item:first-child) {
  border-top: none;
}
:host([bordered]) ::slotted(ecos-menu-item[aria-checked="true"]), 
:host([bordered]) ::slotted(ecos-menu-item:active), 
:host([bordered]) ::slotted(ecos-menu-item.expanded) {
  background: ${neutralFillSelectedBehavior.var}
}
`.withBehaviors(neutralFillHoverBehavior, neutralFillSelectedBehavior, neutralOutlineRestBehavior)

@customElement({
  name: "ecos-menu",
  template,
  styles: [styles, menuSeparatedStyles, menuBorderedStyles]
})
export class EcosMenu extends FASTMenu {

}