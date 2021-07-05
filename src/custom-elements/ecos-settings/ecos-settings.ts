/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { SwatchRGB, fillColor, PaletteRGB, accentPalette, baseLayerLuminance, density, designUnit, controlCornerRadius, strokeWidth, typeRampBaseFontSize } from '@microsoft/fast-components';
import { parseColorHexRGB } from '@microsoft/fast-colors';
import { lineHeightRatio, typeRampRatio } from '../../ecos-design-system/design-tokens';
import { setTypeRamp } from '../../ecos-design-system/modular-type';

export class EcosSettings {
  public color = '#FFF8F0';
  public accent = '#AD016E';
  public baseLayerLuminance = 1;
  public designUnit = 4;
  public density = 0;
  public controlCornerRadius = 5;
  public strokeWidth = 1;
  public typeRampBaseFontSize = 16;
  public typeRampRatio = 1.25;
  public lineHeightRatio = 1.2;

  provider = document.body;

  public constructor(private element: HTMLElement) {

  }

  public attached(): void {
    baseLayerLuminance.setValueFor(this.provider, this.baseLayerLuminance);
    this.updateDesignSystem();
  }

  public updateDesignSystem(): void {
    console.log('updateDesignSystem');
    if (!this.provider) {
      return;
    }
    baseLayerLuminance.setValueFor(this.provider, this.baseLayerLuminance);

    const fill = parseColorHexRGB(this.color)!;
    const fillSwatch = SwatchRGB.create(fill.r, fill.g, fill.b);
    fillColor.setValueFor(this.provider, fillSwatch);
    const base = parseColorHexRGB(this.accent)!;
    const swatch = SwatchRGB.create(base.r, base.g, base.b);
    accentPalette.setValueFor(this.provider, PaletteRGB.create(swatch));
    designUnit.setValueFor(this.provider, this.designUnit);
    density.setValueFor(this.provider, this.density);
    controlCornerRadius.setValueFor(this.provider, this.controlCornerRadius);
    strokeWidth.setValueFor(this.provider, this.strokeWidth);
    typeRampBaseFontSize.setValueFor(this.provider, `${this.typeRampBaseFontSize}px`);
    typeRampRatio.setValueFor(this.provider, this.typeRampRatio);
    lineHeightRatio.setValueFor(this.provider, this.lineHeightRatio);
    setTypeRamp(this.provider, this.typeRampRatio, this.lineHeightRatio);
  }
}