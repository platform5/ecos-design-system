import { attr, customElement, FASTElement } from '@microsoft/fast-element';
import { ColorizeStyles as styles } from './styles';
import { ColorizeTemplate as template } from './template';

@customElement({
  name: 'ecos-colorize',
  template,
  styles
})
export class EcosColorize extends FASTElement {
  
  /**
   * The mode can take any valid value for the CSS mix-blend-mode property
   *
   * @memberof EcosColorize
   */
  @attr()
  public mode = 'lighten';

  public modeChanged(): void {
    window.requestAnimationFrame(() => {
      if (!this.shadowRoot ||!this.shadowRoot.querySelector('.colorizer')) {
        this.modeChanged();
        return;
      }
      const colorizer = this.shadowRoot.querySelector('.colorizer');
      if (!colorizer) {
        return;
      }
      if (this.mode === 'ligthen') {
        colorizer.removeAttribute('style');
      } else {
        colorizer.setAttribute('style', 'mix-blend-mode:'+this.mode);
      }
    });
  }

}