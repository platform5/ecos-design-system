import { ICustomElementViewModel } from 'aurelia';
import { ICustomElementController } from '@aurelia/runtime-html';
import { Animation } from './animation';

export class BlogPage implements ICustomElementViewModel {

  private element: HTMLElement;

  public created(controller: ICustomElementController<BlogPage>): void {
    this.element = controller.host;
  }

  public attaching(): Promise<void> {
    console.log('blog page attaching', this.element);
    return Animation.scaleIn(this.element, 400);
  }

  public detaching(): Promise<void> {
    return Animation.scaleOut(this.element, 200);
  }
}