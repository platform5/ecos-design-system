import { fillColor, SwatchRGB } from '@microsoft/fast-components';
import { customElement } from 'aurelia';
import template from './welcome-page.html';

@customElement({name: 'welcome-page', template})
export class WelcomePage {

  public attached(): void {
    const element = document.querySelector('.header-text') as HTMLElement;
    const fill = SwatchRGB.create(0.3, 0.3, 0.3);
    fillColor.setValueFor(element, fill);
    element.style.setProperty('background', 'var(--fill-color)');
    element.style.setProperty('color', 'var(--neutral-foreground-rest)');
  }
  
}
