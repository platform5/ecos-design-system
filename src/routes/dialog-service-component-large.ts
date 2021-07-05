import { FASTDialogViewModel } from 'aurelia-fast-adapter';
import { IDialogService } from '@aurelia/runtime-html';
import { DialogServiceComponent } from './dialog-service-component';

export class DialogServiceComponentLarge extends FASTDialogViewModel {

  public constructor(@IDialogService public dialogService: IDialogService) {
    super();
  }

  public openComponent(): void {
    this.dialogService.open({
      component: () => DialogServiceComponent,
      lock: false,
      keyboard: ['Escape', 'Enter']
    });
  }
}