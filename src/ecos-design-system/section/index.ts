// based on https://www.joshwcomeau.com/css/full-bleed/
// important: needs the utilities.css styles imported
import { customElement, FASTElement, attr } from '@microsoft/fast-element';
import { SectionStyles as styles } from './styles';
import { SectionTemplate as template } from './template';
import { StackStyles as stackStyles } from '../stack/styles';
import '../stack/styles.css';
import './styles.css';

@customElement({
  name: 'ecos-section',
  template,
  shadowOptions: null
})
export class EcosSection extends FASTElement {

  @attr({mode: 'boolean'})
  public verticalpadded = true;

  @attr({mode: 'boolean'})
  public nocontain = false;

  @attr({mode: 'boolean'})
  public stacked = true;

  @attr()
  public centerwidth = '65ch';

  @attr({mode: 'boolean'})
  public largev = false;

}