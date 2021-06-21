import { IDialogService } from '@aurelia/runtime-html';
import { DialogServiceComponent } from './dialog-service-component';
import { DialogServiceComponentLarge } from './dialog-service-component-large';

export class DialogServicePage {
  public constructor(@IDialogService public dialogService: IDialogService) {}

  public openComponent(): void {
    this.dialogService.open({
      component: () => DialogServiceComponent,
      lock: false,
      keyboard: ['Escape', 'Enter']
    });
  }

  public openLargeComponent(): void {
    this.dialogService.open({
      component: () => DialogServiceComponentLarge,
      lock: false,
      keyboard: ['Escape', 'Enter']
    });
  }
}