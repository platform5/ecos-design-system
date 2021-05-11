import { FASTSelect, SelectStyles, FASTOption, OptionStyles } from '@microsoft/fast-components';
import { customElement } from '@microsoft/fast-element';
import { SelectTemplate, ListboxOptionTemplate } from '@microsoft/fast-foundation';

@customElement({
  name: "ecos-select",
  template: SelectTemplate,
  styles: SelectStyles
})
export class EcosSelect extends FASTSelect {}

@customElement({
  name: "ecos-option",
  template: ListboxOptionTemplate,
  styles: OptionStyles
})
export class EcosOption extends FASTOption {}