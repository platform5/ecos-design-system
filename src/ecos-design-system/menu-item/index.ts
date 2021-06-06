import { customElement } from "@microsoft/fast-element";
import { MenuItem, createMenuItemTemplate } from "@microsoft/fast-foundation";
import { MenuItemStyles as styles } from "@microsoft/fast-components";

const template = createMenuItemTemplate("ecos");

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
    styles,
})
export class EcosMenuItem extends MenuItem {}