import { DesignToken } from '@microsoft/fast-foundation';
import { fillColor, SwatchRGB, accentPalette } from "@microsoft/fast-components";
import { ColorRGBA64 } from "@microsoft/fast-colors";
import { rgbToHSL, ColorHSL, hslToRGB, contrastRatio } from "@microsoft/fast-colors";

export function ligthen(color: SwatchRGB, percent: number): SwatchRGB {
  const parsedHSL = rgbToHSL(new ColorRGBA64(color.r, color.g, color.b));
  const lightenedHSL = new ColorHSL(parsedHSL.h, parsedHSL.s, ((1 - parsedHSL.l) * percent) + parsedHSL.l);
  const lightened = hslToRGB(lightenedHSL);
  return SwatchRGB.create(lightened.r, lightened.g, lightened.b);
}

export function findBestContrast(background: SwatchRGB, startWith: SwatchRGB, minContrast = 4.5): SwatchRGB {
  const backgroundRGB = new ColorRGBA64(background.r, background.g, background.b)
  let colorRGB = new ColorRGBA64(startWith.r, startWith.g, startWith.b)
  let contrast = contrastRatio(backgroundRGB, colorRGB);
  let iterations = 0;
  while (contrast < minContrast && iterations < 100) {
    iterations++;
    const colorHSL = rgbToHSL(colorRGB);
    const darkenedHSL = new ColorHSL(colorHSL.h, colorHSL.s, colorHSL.l - (colorHSL.l * 0.05));
    colorRGB = hslToRGB(darkenedHSL);
    contrast = contrastRatio(backgroundRGB, colorRGB);
  }
  return SwatchRGB.create(colorRGB.r, colorRGB.g, colorRGB.b);
}

export interface PastelPanel {
  fillRest: SwatchRGB;
  fillHover: SwatchRGB;
  fillActive: SwatchRGB;
  fillFocus: SwatchRGB;
  foregroundRestOnFill: SwatchRGB;
  foregroundRest: SwatchRGB;
}

export function pastelRecipeAlgorithm(element: HTMLElement, baseColor: SwatchRGB): PastelPanel {
  const fillRestBackground = ligthen(baseColor, 0.8);
  const defaultBackground = fillColor.getValueFor(element);

  const bestFillContrast = findBestContrast(fillRestBackground, baseColor);
  const bestDefaultContrast = findBestContrast(defaultBackground as SwatchRGB, baseColor);

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
  return pastelRecipeAlgorithm(element, accentPalette.getValueFor(element).source as SwatchRGB);
});

