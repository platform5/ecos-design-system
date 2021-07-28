import { accentPalette } from '@microsoft/fast-components';
import { attr } from '@microsoft/fast-element';
import { secondaryPalette, importantPalette, errorPalette } from '../design-tokens';

/**
 * A mixin class implementing secondary, important and error colors.
 * @public
 */
 export class SecondaryImportantError {

  readonly isConnected: boolean;

  @attr({mode: 'boolean'})
  public secondary = false;
  public secondaryChanged(): void {
    if (!this.isConnected) {
      return;
    }
    const element = this as unknown as HTMLElement;
    if (this.secondary) {
      accentPalette.setValueFor(element, secondaryPalette.getValueFor(element));
    } else if (!this.hasColorChange()) {
      accentPalette.deleteValueFor(element);
    }
  }

  @attr({mode: 'boolean'})
  public important = false;
  public importantChanged(): void {
    if (!this.isConnected) {
      return;
    }
    const element = this as unknown as HTMLElement;
    if (this.important) {
      accentPalette.setValueFor(element, importantPalette.getValueFor(element));
    } else if (!this.hasColorChange()) {
      accentPalette.deleteValueFor(element);
    }
  }

  @attr({mode: 'boolean'})
  public error = false;
  public errorChanged(): void {
    if (!this.isConnected) {
      return;
    }
    const element = this as unknown as HTMLElement;
    if (this.error) {
      accentPalette.setValueFor(element, errorPalette.getValueFor(element));
    } else if (!this.hasColorChange()) {
      accentPalette.deleteValueFor(element);
    }
  }

  private hasColorChange(): boolean {
    return this.secondary || this.important || this.error;
  }
}