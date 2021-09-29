import { activeFastColorAlgorithm, activePastelColorAlgorithm } from './../../ecos-design-system/design-tokens';
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
  public colorAlgorithm: 'fast' | 'pastel' = 'fast';

  public constructor(private element: HTMLElement) {

  }

  public attached(): void {
    baseLayerLuminance.withDefault(this.baseLayerLuminance);
    this.updateDesignSystem();
  }

  public updateDesignSystem(): void {
    baseLayerLuminance.withDefault(this.baseLayerLuminance);

    const fill = parseColorHexRGB(this.color)!;
    const fillSwatch = SwatchRGB.create(fill.r, fill.g, fill.b);
    fillColor.withDefault(fillSwatch);
    const base = parseColorHexRGB(this.accent)!;
    const swatch = SwatchRGB.create(base.r, base.g, base.b);
    accentPalette.withDefault(PaletteRGB.create(swatch));
    designUnit.withDefault(this.designUnit);
    density.withDefault(this.density);
    controlCornerRadius.withDefault(this.controlCornerRadius);
    strokeWidth.withDefault(this.strokeWidth);
    typeRampBaseFontSize.withDefault(`${this.typeRampBaseFontSize}px`);
    typeRampRatio.withDefault(this.typeRampRatio);
    lineHeightRatio.withDefault(this.lineHeightRatio);
    setTypeRamp(document.body, this.typeRampRatio, this.lineHeightRatio);

    if (this.colorAlgorithm === 'fast') {
      activeFastColorAlgorithm();
    } else {
      activePastelColorAlgorithm();
    }
  }
}