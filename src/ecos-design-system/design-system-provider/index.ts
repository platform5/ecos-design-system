import { FASTDesignSystemProvider, createColorPalette, fastDesignSystemDefaults } from '@microsoft/fast-components';
import {
  designSystemProperty,
  defineDesignSystemProvider,
  DesignSystemProviderTemplate as template,
} from "@microsoft/fast-foundation";
import { css } from '@microsoft/fast-element';
import { parseColor, ColorRGBA64, darkenViaLAB, blendLighten, blendDarken, blendColor } from "@microsoft/fast-colors";
import { setTypeRamp } from './modular-type';

@defineDesignSystemProvider({
  name: "ecos-design-system-provider",
  template,
  styles: css`:host { display: block }`
})
export class EcosDesignSystemProvider extends FASTDesignSystemProvider {

  public accentBaseColorChanged(oldValue: string, newValue: string): void {
    console.log('accentBaseColorChanged');
    if (newValue !== oldValue) {
      this.accentBaseColor = newValue;
      const parsedColor = parseColor(newValue)
      if (parsedColor) {
        this.accentPalette = createColorPalette(parsedColor);
      }
      this.setBackgroundTeintedColor();
    }
  }

  // public backgroundColorChanged(oldValue: string, newValue: string): void {
  //   if (newValue !== oldValue) {
  //     this.backgroundColor = newValue;
  //     const parsedColor = parseColor(newValue)
  //     if (parsedColor) {
  //       this.neutralPalette = createColorPalette(parsedColor);
  //     }
  //     this.setBackgroundTeintedColor();
  //   }
  // }
  public backgroundColorChanged2(): void {
    const parsedColor = parseColor(this.backgroundColor)
    if (parsedColor) {
      this.neutralPalette = createColorPalette(parsedColor);
    }
    this.setBackgroundTeintedColor();
  }

  public typeRampBaseFontSizeChanged(oldValue: string, newValue: string): void {
    if (newValue !== oldValue) {
      setTypeRamp(this, this.typeRampRatio, this.lineHeightRatio);
    }
  }

  @designSystemProperty({
    attribute: "type-ramp-ratio",
    default: 1.25,
  })
  public typeRampRatio: number;
  public typeRampRatioChanged(oldValue: string, newValue: string): void {
    if (newValue !== oldValue) {
      setTypeRamp(this, this.typeRampRatio, this.lineHeightRatio);
    }
  }

  @designSystemProperty({
    attribute: "line-height-ratio",
    default: 1.2,
  })
  public lineHeightRatio: number;
  public lineHeightRatioChanged(oldValue: string, newValue: string): void {
    if (newValue !== oldValue) {
      setTypeRamp(this, this.typeRampRatio, this.lineHeightRatio);
    }
  }

  @designSystemProperty({
    attribute: false,
    cssCustomProperty: "background-teinted-color",
    default: fastDesignSystemDefaults.backgroundColor,
  })
  public backgroundTeintedColor: string;
  private setBackgroundTeintedColor(): void {
    const background = parseColor(this.backgroundColor);
    const accent = parseColor(this.accentBaseColor);
    const blend1 = blendColor(background, accent).toStringHexRGB();
    if (blend1 !== background.toStringHexRGB()) {
      this.backgroundTeintedColor = blend1;
    } else {
      this.backgroundTeintedColor = blendColor(accent, background).toStringHexRGB();
    }
  }

}
