import { FASTDialogViewModel } from 'aurelia-fast-adapter';
import { IDialogService } from '@aurelia/runtime-html';
import { DialogServiceComponentLarge } from './dialog-service-component-large';

export class DialogServiceComponent extends FASTDialogViewModel {

  public constructor(@IDialogService public dialogService: IDialogService) {
    super();
  }

  public openLargeComponent(): void {
    this.dialogService.open({
      component: () => DialogServiceComponentLarge,
      lock: false,
      keyboard: ['Escape', 'Enter']
    });
  }
}