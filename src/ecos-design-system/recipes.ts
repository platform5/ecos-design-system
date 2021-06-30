import { DesignToken } from "@microsoft/fast-foundation";
import { darkenViaLAB, lightenViaLAB, ColorRGBA64 } from "@microsoft/fast-colors";
import { accentPalette, SwatchRGB } from "@microsoft/fast-components";

export const accentLight50 = DesignToken.create<string>('accent-light-50').withDefault((element) => {
  const base = accentPalette.getValueFor(element).source as SwatchRGB;
  const accent = new ColorRGBA64(base.r, base.g, base.b);
  return lightenViaLAB(accent, 0.25).toStringHexRGB();
});
export const accentLight100 = DesignToken.create<string>('accent-light-100').withDefault((element) => {
  const base = accentPalette.getValueFor(element).source as SwatchRGB;
  const accent = new ColorRGBA64(base.r, base.g, base.b);
  return lightenViaLAB(accent, 1).toStringHexRGB();
});
export const accentDark50 = DesignToken.create<string>('accent-dark-50').withDefault((element) => {
  const base = accentPalette.getValueFor(element).source as SwatchRGB;
  const accent = new ColorRGBA64(base.r, base.g, base.b);
  return darkenViaLAB(accent, 1).toStringHexRGB();
});
export const accentDark100 = DesignToken.create<string>('accent-dark-100').withDefault((element) => {
  const base = accentPalette.getValueFor(element).source as SwatchRGB;
  const accent = new ColorRGBA64(base.r, base.g, base.b);
  return darkenViaLAB(accent, 2).toStringHexRGB();
});