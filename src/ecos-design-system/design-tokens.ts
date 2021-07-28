import { DesignToken } from '@microsoft/fast-foundation';
import { SwatchRGB, designUnit, density, fillColor, accentPalette, neutralFillInputRestDelta, neutralFillInputHoverDelta, neutralFillInputActiveDelta, neutralFillInputFocusDelta, accentFillRecipe } from '@microsoft/fast-components';
import { parseColor, blendColor } from "@microsoft/fast-colors";
import { darkenViaLAB, lightenViaLAB, ColorRGBA64 } from "@microsoft/fast-colors";
import { colorStringToSwatch, accentPanel } from './pastel-colors';
import { Palette, PaletteRGB, foregroundOnAccentRest, foregroundOnAccentHover, accentFillRest, accentFillHover, accentForegroundRest, accentForegroundRecipe, foregroundOnAccentRecipe } from "@microsoft/fast-components";

export type ColorAlgorithm = 'fast' | 'pastel';
export const colorAlgorithm = DesignToken.create<ColorAlgorithm>('color-algorithm').withDefault('fast');
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

accentFillRest.withDefault((element) => {
  const ca = colorAlgorithm.getValueFor(element);
  if (ca === 'pastel') {
    return colorStringToSwatch(accentPanel.getValueFor(element).fillRest);
  } else {
    return accentFillRecipe.getValueFor(element).evaluate(element).rest;
  }
});
accentFillHover.withDefault((element) => {
  const ca = colorAlgorithm.getValueFor(element);
  if (ca === 'pastel') {
    return colorStringToSwatch(accentPanel.getValueFor(element).fillHover);
  } else {
    return accentFillRecipe.getValueFor(element).evaluate(element).hover;
  }
});
accentForegroundRest.withDefault((element) => {
  const ca = colorAlgorithm.getValueFor(element);
  if (ca === 'pastel') {
    return colorStringToSwatch(accentPanel.getValueFor(element).foregroundRest);
  } else {
    return accentForegroundRecipe.getValueFor(element).evaluate(element).rest;
  }
});
foregroundOnAccentRest.withDefault((element) => {
  // fake lines to ensure foregroundOnAccentRest is updated with accentPalette changes
  // can be removed once FAST fixes deep dependencies issues with token updates
  const ap = accentPalette.getValueFor(element);
  const ca = colorAlgorithm.getValueFor(element);
  if (ap === undefined) {return SwatchRGB.create(0, 0, 0);}
  if (ca === 'pastel') {
    return colorStringToSwatch(accentPanel.getValueFor(element).foregroundRestOnFill);
  } else {
    return foregroundOnAccentRecipe
      .getValueFor(element)
      .evaluate(element, accentFillRest.getValueFor(element));
  }
});
foregroundOnAccentHover.withDefault((element) => {
  // fake lines to ensure foregroundOnAccentRest is updated with accentPalette changes
  // can be removed once FAST fixes deep dependencies issues with token updates
  const ap = accentPalette.getValueFor(element);
  if (ap === undefined) {return SwatchRGB.create(0, 0, 0);}
  const ca = colorAlgorithm.getValueFor(element);
  if (ca === 'pastel') {
    return colorStringToSwatch(accentPanel.getValueFor(element).foregroundRestOnFill);
  } else {
    return foregroundOnAccentRecipe
      .getValueFor(element)
      .evaluate(element, accentFillHover.getValueFor(element));
  }
});

export const secondaryPalette = DesignToken.create<Palette>({
  name: "secondary-palette",
  cssCustomPropertyName: null,
}).withDefault(PaletteRGB.create(colorStringToSwatch('#65A5E0')));

export const importantPalette = DesignToken.create<Palette>({
  name: "important-palette",
  cssCustomPropertyName: null,
}).withDefault(PaletteRGB.create(colorStringToSwatch('#F4BD31')));

export const errorPalette = DesignToken.create<Palette>({
  name: "error-palette",
  cssCustomPropertyName: null,
}).withDefault(PaletteRGB.create(colorStringToSwatch('#E24B34')));


export const accentFillRestLight50 = DesignToken.create<string>('accent-fill-rest-light-50').withDefault((element) => {
  // fake lines to ensure foregroundOnAccentRest is updated with accentPalette changes
  // can be removed once FAST fixes deep dependencies issues with token updates
  const ap = accentPalette.getValueFor(element);
  if (ap === undefined) {return ''}
  const base = accentFillRest.getValueFor(element) as SwatchRGB;
  const accent = new ColorRGBA64(base.r, base.g, base.b);
  return lightenViaLAB(accent, 0.25).toStringHexRGB();
});
export const accentFillRestLight100 = DesignToken.create<string>('accent-fill-rest-light-100').withDefault((element) => {
  // fake lines to ensure foregroundOnAccentRest is updated with accentPalette changes
  // can be removed once FAST fixes deep dependencies issues with token updates
  const ap = accentPalette.getValueFor(element);
  if (ap === undefined) {return ''}
  const base = accentFillRest.getValueFor(element) as SwatchRGB;
  const accent = new ColorRGBA64(base.r, base.g, base.b);
  return lightenViaLAB(accent, 1).toStringHexRGB();
});
export const accentFillRestDark50 = DesignToken.create<string>('accent-fill-rest-dark-50').withDefault((element) => {
  // fake lines to ensure foregroundOnAccentRest is updated with accentPalette changes
  // can be removed once FAST fixes deep dependencies issues with token updates
  const ap = accentPalette.getValueFor(element);
  if (ap === undefined) {return ''}
  const base = accentFillRest.getValueFor(element) as SwatchRGB;
  const accent = new ColorRGBA64(base.r, base.g, base.b);
  return darkenViaLAB(accent, 1).toStringHexRGB();
});
export const accentFillRestDark100 = DesignToken.create<string>('accent-fill-rest-dark-100').withDefault((element) => {
  // fake lines to ensure foregroundOnAccentRest is updated with accentPalette changes
  // can be removed once FAST fixes deep dependencies issues with token updates
  const ap = accentPalette.getValueFor(element);
  if (ap === undefined) {return ''}
  const base = accentFillRest.getValueFor(element) as SwatchRGB;
  const accent = new ColorRGBA64(base.r, base.g, base.b);
  return darkenViaLAB(accent, 2).toStringHexRGB();
});