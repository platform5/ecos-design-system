import { DesignToken } from '@microsoft/fast-foundation';
import { fillColor, SwatchRGB, accentPalette } from "@microsoft/fast-components";
import { parseColor } from "@microsoft/fast-colors";
import { rgbToHSL, ColorHSL, hslToRGB, contrastRatio } from "@microsoft/fast-colors";

export function colorStringToSwatch(color: string): SwatchRGB {
  const parsed = parseColor(color);
  return SwatchRGB.create(parsed.r, parsed.g, parsed.b);
}

export function ligthen(color: string, percent: number): string {
  const parsed = parseColor(color);
  const parsedHSL = rgbToHSL(parsed);
  const lightenedHSL = new ColorHSL(parsedHSL.h, parsedHSL.s, ((1 - parsedHSL.l) * percent) + parsedHSL.l);
  const lightened = hslToRGB(lightenedHSL);
  return lightened.toStringHexRGB();
}

export function findBestContrast(background: string, startWith: string, minContrast = 4.5): string {
  const backgroundRGB = parseColor(background);
  let colorRGB = parseColor(startWith);
  let contrast = contrastRatio(backgroundRGB, colorRGB);
  let iterations = 0;
  while (contrast < minContrast && iterations < 100) {
    iterations++;
    const colorHSL = rgbToHSL(colorRGB);
    const darkenedHSL = new ColorHSL(colorHSL.h, colorHSL.s, colorHSL.l - (colorHSL.l * 0.05));
    colorRGB = hslToRGB(darkenedHSL);
    contrast = contrastRatio(backgroundRGB, colorRGB);
  }
  return colorRGB.toStringHexRGB();
}

export interface PastelPanel {
  fillRest: string;
  fillHover: string;
  fillActive: string;
  fillFocus: string;
  foregroundRestOnFill: string;
  foregroundRest: string;
}

export function pastelRecipeAlgorithm(element: HTMLElement, baseColor: string): PastelPanel {
  const fillRestBackground = ligthen(baseColor, 0.8);
  const defaultBackground = fillColor.getValueFor(element).toColorString();

  const bestFillContrast = findBestContrast(fillRestBackground, baseColor);
  const bestDefaultContrast = findBestContrast(defaultBackground, baseColor);

  return {
    fillRest: fillRestBackground,
    fillHover: ligthen(baseColor, 0.7),
    fillActive: ligthen(baseColor, 0.6),
    fillFocus: ligthen(baseColor, 0.6),
    foregroundRestOnFill: bestFillContrast,
    foregroundRest: bestDefaultContrast
  };
}

export const accentPanel = DesignToken.create<PastelPanel>({name: 'accent-panel', cssCustomPropertyName: null}).withDefault((element) => {
  return pastelRecipeAlgorithm(element, accentPalette.getValueFor(element).source.toColorString());
});

