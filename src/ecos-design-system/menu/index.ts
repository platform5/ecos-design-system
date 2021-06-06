import { FASTMenu, MenuStyles as styles } from '@microsoft/fast-components';
import { customElement } from '@microsoft/fast-element';
import { MenuTemplate as template } from '@microsoft/fast-foundation';

@customElement({
  name: "ecos-menu",
  template,
  styles: styles
})
export class EcosMenu extends FASTMenu {

}