import { DesignToken } from '@microsoft/fast-foundation';
import { designUnit, density, fillColor, accentPalette } from '@microsoft/fast-components';
import { parseColor, blendColor, parseColorHexRGB } from "@microsoft/fast-colors";

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
