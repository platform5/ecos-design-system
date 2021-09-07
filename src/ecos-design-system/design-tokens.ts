import { DesignToken } from '@microsoft/fast-foundation';
import { SwatchRGB, designUnit, density, fillColor, accentPalette, neutralFillInputRestDelta, neutralFillInputHoverDelta, neutralFillInputActiveDelta, neutralFillInputFocusDelta, accentFillRecipe, accentFillFocus, accentFillActive } from '@microsoft/fast-components';
import { parseColor, blendColor } from "@microsoft/fast-colors";
import { darkenViaLAB, lightenViaLAB, ColorRGBA64 } from "@microsoft/fast-colors";
import { colorStringToSwatch, accentPanel } from './pastel-colors';
import { Palette, PaletteRGB, foregroundOnAccentRest, foregroundOnAccentHover, accentFillRest, accentFillHover, accentForegroundRest, accentForegroundRecipe, foregroundOnAccentRecipe } from "@microsoft/fast-components";

export const typeRampRatio = DesignToken.create<number>('type-ramp-ratio').withDefault(1.25);
export const lineHeightRatio = DesignToken.create<number>('line-height-ratio').withDefault(1.2);

export const baseSpacingUnit = DesignToken.create<string>('base-spacing-unit').withDefault((element) => {
  const baseSpacing = designUnit.getValueFor(element) * 2;
  const spacing = Math.pow(2, density.getValueFor(element)) * baseSpacing;
  return spacing.toString();
});
export const backgroundTeintedColor = DesignToken.create<string>('background-teinted-color').withDefault((element) => {
  const background = parseColor(fillColor.getValueFor(element).toColorString());
  const accent = parseColor(accentPalette.getValueFor(element).source.toColorString());
  const blend1 = blendColor(background, accent).toStringHexRGB();
  if (blend1 !== background.toStringHexRGB()) {
    return blend1;
  } else {
    return blendColor(accent, background).toStringHexRGB();
  }
});

export function enhanceNeutralFillInputDesignTokens(): void {
  const setInputDelta = (element: HTMLElement, nominalValue = 3): number => {
    const fill = fillColor.getValueFor(element) as SwatchRGB;
    const r = Math.round(fill.r * 100);
    const g = Math.round(fill.g * 100);
    const b = Math.round(fill.b * 100);
    const isGrey = r === g && r === b;
    const isWhite = r === 117 && g === 117 && b === 117;
    const direction = isWhite ? -1 : 1;
    return isGrey ? nominalValue * direction : 0;
  }

  neutralFillInputRestDelta.withDefault((element) => {
    return setInputDelta(element, 4);
  });
  neutralFillInputHoverDelta.withDefault((element) => {
    return setInputDelta(element, 5);
  });
  neutralFillInputActiveDelta.withDefault((element) => {
    return setInputDelta(element, 5);
  });
  neutralFillInputFocusDelta.withDefault((element) => {
    return setInputDelta(element, 5);
  });
}

export function activeFastColorAlgorithm(): void {
  accentFillRest.withDefault((element) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).rest;
  });
  accentFillHover.withDefault((element) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).hover;
  });
  accentFillFocus.withDefault((element) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).focus;
  });
  accentFillActive.withDefault((element) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).active;
  });
  accentForegroundRest.withDefault((element) => {
    return accentForegroundRecipe.getValueFor(element).evaluate(element).rest;
  });
  foregroundOnAccentRest.withDefault((element) => {
    return foregroundOnAccentRecipe
      .getValueFor(element)
      .evaluate(element, accentFillRest.getValueFor(element));
  });
  foregroundOnAccentHover.withDefault((element) => {
    return foregroundOnAccentRecipe
      .getValueFor(element)
      .evaluate(element, accentFillHover.getValueFor(element));
  });
}

export function activePastelColorAlgorithm(): void {
  accentFillRest.withDefault((element) => {
    return colorStringToSwatch(accentPanel.getValueFor(element).fillRest);
  });
  accentFillHover.withDefault((element) => {
    return colorStringToSwatch(accentPanel.getValueFor(element).fillHover);
  });
  accentFillFocus.withDefault((element) => {
    return colorStringToSwatch(accentPanel.getValueFor(element).fillFocus);
  });
  accentFillActive.withDefault((element) => {
    return colorStringToSwatch(accentPanel.getValueFor(element).fillActive);
  });
  accentForegroundRest.withDefault((element) => {
    return colorStringToSwatch(accentPanel.getValueFor(element).foregroundRest);
  });
  foregroundOnAccentRest.withDefault((element) => {
    return colorStringToSwatch(accentPanel.getValueFor(element).foregroundRestOnFill);
  });
  foregroundOnAccentHover.withDefault((element) => {
    return colorStringToSwatch(accentPanel.getValueFor(element).foregroundRestOnFill);
  });
}

export const secondaryPalette = DesignToken.create<Palette>({
  name: "secondary-palette",
  cssCustomPropertyName: null,
}).withDefault(PaletteRGB.from(colorStringToSwatch('#65A5E0')));

export const importantPalette = DesignToken.create<Palette>({
  name: "important-palette",
  cssCustomPropertyName: null,
}).withDefault(PaletteRGB.from(colorStringToSwatch('#F4BD31')));

export const errorPalette = DesignToken.create<Palette>({
  name: "error-palette",
  cssCustomPropertyName: null,
}).withDefault(PaletteRGB.from(colorStringToSwatch('#E24B34')));


export const accentFillRestLight50 = DesignToken.create<string>('accent-fill-rest-light-50').withDefault((element) => {
  const base = accentFillRest.getValueFor(element) as SwatchRGB;
  const accent = new ColorRGBA64(base.r, base.g, base.b);
  return lightenViaLAB(accent, 0.25).toStringHexRGB();
});
export const accentFillRestLight100 = DesignToken.create<string>('accent-fill-rest-light-100').withDefault((element) => {
  const base = accentFillRest.getValueFor(element) as SwatchRGB;
  const accent = new ColorRGBA64(base.r, base.g, base.b);
  return lightenViaLAB(accent, 1).toStringHexRGB();
});
export const accentFillRestDark50 = DesignToken.create<string>('accent-fill-rest-dark-50').withDefault((element) => {
  const base = accentFillRest.getValueFor(element) as SwatchRGB;
  const accent = new ColorRGBA64(base.r, base.g, base.b);
  return darkenViaLAB(accent, 1).toStringHexRGB();
});
export const accentFillRestDark100 = DesignToken.create<string>('accent-fill-rest-dark-100').withDefault((element) => {
  const base = accentFillRest.getValueFor(element) as SwatchRGB;
  const accent = new ColorRGBA64(base.r, base.g, base.b);
  return darkenViaLAB(accent, 2).toStringHexRGB();
});