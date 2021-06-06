import { FASTDesignSystemProvider, createColorPalette, fastDesignSystemDefaults } from '@microsoft/fast-components';
import {
  designSystemProperty,
  defineDesignSystemProvider,
  DesignSystemProviderTemplate as template,
} from "@microsoft/fast-foundation";
import { attr, css, Observable, DOM, nullableNumberConverter } from '@microsoft/fast-element';
import { parseColor, blendColor } from "@microsoft/fast-colors";
import { setTypeRamp } from './modular-type';

@defineDesignSystemProvider({
  name: "ecos-design-system-provider",
  template,
  styles: css`:host { display: block }`
})
export class EcosDesignSystemProvider extends FASTDesignSystemProvider {

  @attr({mode: 'boolean', attribute: 'apply-background-to-body'})
  public applyBackgroundToBody = false;

  public connectedCallback(): void {
    super.connectedCallback();
    Observable.getNotifier(this).subscribe(this, 'backgroundColor');
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    Observable.getNotifier(this).unsubscribe(this, 'backgroundColor');
  }

  public handleChange(source: HTMLElement, name: string): void {
    if (name === 'backgroundColor' && this.backgroundColor !== undefined) {
      this.backgroundColorChanged2();
    }
  }

  public accentBaseColorChanged(oldValue: string, newValue: string): void {
    if (newValue !== oldValue) {
      this.accentBaseColor = newValue;
      const parsedColor = parseColor(newValue)
      if (parsedColor) {
        this.accentPalette = createColorPalette(parsedColor);
      }
      this.setBackgroundTeintedColor();
    }
  }

  // we can't extend backgroundColorChanged as it is private in the FASTDesignSystemProvider class
  // we for now let's keep this commented and use backgroundColorChanged2
  // Follow https://github.com/microsoft/fast/issues/4721 for updates
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
    if (this.applyBackgroundToBody) {
      document.body.style.setProperty('background-color', parsedColor.toStringHexRGB());
    }
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

  /**
   * The grid-unit that UI dimensions are derived from in pixels.
   *
   * @remarks
   * HTML attribute: base-unit
   *
   * CSS custom property: --base-unit
   */
      @designSystemProperty({
      attribute: "base-unit",
      converter: nullableNumberConverter,
      default: 8,
  })
  public baseUnit: number;

  public baseUnitChanged(): void {
    if (typeof this.baseUnit === 'number') {
      this.designUnit = this.baseUnit / 2;
    }
  }

  /**
   * The number of designUnits used for component height at the base density.
   *
   * @remarks
   * HTML attribute: base-unit
   *
   * CSS custom property: --base-unit
   */
  @designSystemProperty({
    attribute: "base-h-multiplier",
    converter: nullableNumberConverter,
    default: 5,
  })
  public baseHMultiplier: number;

  public baseHMultiplierChanged(): void {
    if (typeof this.baseHMultiplier === 'number') {
      this.baseHeightMultiplier = this.baseHMultiplier * 2;
    }
  }

  /**
   * The number of designUnits used for horizontal spacing at the base density.
   *
   * @remarks
   * HTML attribute: base-unit
   *
   * CSS custom property: --base-unit
   */
  @designSystemProperty({
    attribute: "base-spacing-multiplier",
    converter: nullableNumberConverter,
    default: 1.5,
  })
  public baseSpacingMultiplier: number;

  public baseSpacingMultiplierChanged(): void {
    if (typeof this.baseSpacingMultiplier === 'number') {
      this.baseHorizontalSpacingMultiplier = this.baseSpacingMultiplier * 2;
    }
  }

  @attr({mode: 'boolean'})
  densify = false;
  public densifyChanged(): void {
    if (this.densify) {
      DOM.queueUpdate(() => {
        const parentProvider = EcosDesignSystemProvider.findProvider(this);
        if (parentProvider instanceof EcosDesignSystemProvider) {
          this.density = parentProvider.density + 1;
        }
      });
    }
  }

}
