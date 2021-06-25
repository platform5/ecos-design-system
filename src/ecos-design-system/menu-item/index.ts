import { customElement, css } from "@microsoft/fast-element";
import { MenuItem, createMenuItemTemplate } from "@microsoft/fast-foundation";
import { MenuItemStyles as styles } from "@microsoft/fast-components";

const template = createMenuItemTemplate("ecos");

export const maxRadiusCheckboxStyles = css`
  :host .checkbox {
    border-radius: calc(min(calc(var(--corner-radius) * 1px), 5px));
  }
`

/**
 * The Ecos Menu Item Element. Implements {@link @microsoft/fast-foundation#MenuItem},
 * {@link @microsoft/fast-foundation#MenuItemTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<ecos-menu-item\>
 */
@customElement({
    name: "ecos-menu-item",
    template,
    styles: [styles, maxRadiusCheckboxStyles],
})
export class EcosMenuItem extends MenuItem {}