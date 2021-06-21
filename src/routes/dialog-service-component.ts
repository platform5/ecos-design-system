import { ICustomElementViewModel } from 'aurelia';
import { IDialogService } from '@aurelia/runtime-html';
import { DialogServiceComponentLarge } from './dialog-service-component-large';

export class DialogServiceComponent implements ICustomElementViewModel {

  public constructor(@IDialogService public dialogService: IDialogService) {}

  public openLargeComponent(): void {
    this.dialogService.open({
      component: () => DialogServiceComponentLarge,
      lock: false,
      keyboard: ['Escape', 'Enter']
    });
  }

}