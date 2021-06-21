import { ICustomElementViewModel } from 'aurelia';
import { IDialogService } from '@aurelia/runtime-html';
import { DialogServiceComponent } from './dialog-service-component';

export class DialogServiceComponentLarge implements ICustomElementViewModel {

  public constructor(@IDialogService public dialogService: IDialogService) {}

  public openComponent(): void {
    this.dialogService.open({
      component: () => DialogServiceComponent,
      lock: false,
      keyboard: ['Escape', 'Enter']
    });
  }
}