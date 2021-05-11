import { ICustomElementViewModel } from 'aurelia';
import { ICustomElementController } from '@aurelia/runtime-html';
import { Animation } from './animation';

export class OnePageWebsite implements ICustomElementViewModel {

  private element: HTMLElement;

  public created(controller: ICustomElementController<OnePageWebsite>): void {
    this.element = controller.host;
  }

  public attaching(): Promise<void> {
    return Animation.scaleIn(this.element, 600);
  }

  public detaching(): Promise<void> {
    return Animation.scaleOut(this.element, 300);
  }
}