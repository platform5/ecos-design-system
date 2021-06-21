import { customElement } from '@microsoft/fast-element';
import { SwitchTemplate as template } from '@microsoft/fast-foundation';
import { SwitchStyles as styles, FASTSwitch } from '@microsoft/fast-components';

@customElement({
  name: 'ecos-switch',
  template,
  styles
})
export class EcosSwitch extends FASTSwitch {

}