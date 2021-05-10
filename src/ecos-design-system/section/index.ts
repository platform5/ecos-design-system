// based on https://www.joshwcomeau.com/css/full-bleed/
// important: needs the utilities.css styles imported
import { customElement, FASTElement, attr } from '@microsoft/fast-element';
import { SectionStyles as styles } from './styles';
import { SectionTemplate as template } from './template';
import { StackStyles as stackStyles } from '../stack/styles';

@customElement({
  name: 'ecos-section',
  template,
  styles: [stackStyles, styles] ,
  shadowOptions: null
})
export class EcosSection extends FASTElement {

  @attr({mode: 'boolean'})
  public verticalpadded = true;

  @attr({mode: 'boolean'})
  public stacked = true;

  @attr()
  public centerwidth = '65ch';

}