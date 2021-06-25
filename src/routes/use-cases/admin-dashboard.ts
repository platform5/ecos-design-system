import { ICustomElementViewModel } from 'aurelia';
import { ICustomElementController } from '@aurelia/runtime-html';
import { Animation } from './animation';
import fakeData from './fake-data.json';

export class AdminDashboard implements ICustomElementViewModel {

  private element: HTMLElement;
  public view = {cards: false, dialog: false, menu: true, list: false};
  public listingKeys = {name: true, address: true, icon: true, button: true};
  public checkboxMenu = {name: true, address: true, icon: true, button: true};
  public data = fakeData;

  public rows = [
    ['Vanne de service 1/4 flare', ]
  ]

  public created(controller: ICustomElementController<AdminDashboard>): void {
    this.element = controller.host;
  }

  public attaching(): Promise<void> {
    return Animation.scaleIn(this.element, 400);
  }

  public detaching(): Promise<void> {
    return Animation.scaleOut(this.element, 200);
  }
}