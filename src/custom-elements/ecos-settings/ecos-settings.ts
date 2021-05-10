import { EcosDesignSystemProvider } from '../../ecos-design-system';
import { FASTDesignSystemProvider } from '@microsoft/fast-components';

export class EcosSettings {
  public color = '#FFF8F0';
  public accent = '#AD016E';
  public designUnit = 4;
  public density = 0;
  public cornerRadius = 5;
  public typeRampBaseFontSize = 16;
  public typeRampRatio = 1.25;
  public lineHeightRatio = 1.2;

  public provider: EcosDesignSystemProvider;

  public constructor(private element: HTMLElement) {

  }

  public attached(): void {
    this.provider = FASTDesignSystemProvider.findProvider(this.element) as EcosDesignSystemProvider;
    this.updateDesignSystem();
  }

  public updateDesignSystem(): void {
    if (!this.provider) {
      return;
    }
    this.provider.backgroundColor = this.color;
    this.provider.accentBaseColor = this.accent;
    this.provider.designUnit = this.designUnit;
    this.provider.density = this.density;
    this.provider.cornerRadius = this.cornerRadius;
    this.provider.typeRampBaseFontSize = `${this.typeRampBaseFontSize}px`;
    this.provider.typeRampRatio = this.typeRampRatio;
    this.provider.lineHeightRatio = this.lineHeightRatio;

    this.provider.backgroundColorChanged2();
  }
}