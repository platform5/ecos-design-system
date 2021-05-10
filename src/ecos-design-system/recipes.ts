import { cssCustomPropertyBehaviorFactory } from "@microsoft/fast-foundation";
import { FASTDesignSystem, FASTDesignSystemProvider } from "@microsoft/fast-components";
import { parseColorString } from "@microsoft/fast-components";
import { darkenViaLAB, lightenViaLAB } from "@microsoft/fast-colors";

export const accentLight50Behavior = cssCustomPropertyBehaviorFactory(
  "accent-light-50",
  (x: FASTDesignSystem): string => {
    const accent = parseColorString(x.accentBaseColor);
    return lightenViaLAB(accent, 0.25).toStringHexRGB();
  },
  FASTDesignSystemProvider.findProvider
);

export const accentLight100Behavior = cssCustomPropertyBehaviorFactory(
  "accent-light-100",
  (x: FASTDesignSystem): string => {
    const accent = parseColorString(x.accentBaseColor);
    return lightenViaLAB(accent, 1).toStringHexRGB();
  },
  FASTDesignSystemProvider.findProvider
);

export const accentDark50Behavior = cssCustomPropertyBehaviorFactory(
  "accent-dark-50",
  (x: FASTDesignSystem): string => {
    const accent = parseColorString(x.accentBaseColor);
    return darkenViaLAB(accent, 1).toStringHexRGB();
  },
  FASTDesignSystemProvider.findProvider
);

export const accentDark100Behavior = cssCustomPropertyBehaviorFactory(
  "accent-dark-100",
  (x: FASTDesignSystem): string => {
    const accent = parseColorString(x.accentBaseColor);
    return darkenViaLAB(accent, 2).toStringHexRGB();
  },
  FASTDesignSystemProvider.findProvider
);

// export const backgroundLight50Behavior = cssCustomPropertyBehaviorFactory(
//   "background-light-50",
//   (x: FASTDesignSystem): string => {
//     const background = parseColorString(x.backgroundColor);
//     return lightenViaLAB(background, 0.25).toStringHexRGB();
//   },
//   FASTDesignSystemProvider.findProvider
// );

// export const backgroundLight100Behavior = cssCustomPropertyBehaviorFactory(
//   "background-light-100",
//   (x: FASTDesignSystem): string => {
//     const background = parseColorString(x.backgroundColor);
//     return lightenViaLAB(background, 0.5).toStringHexRGB();
//   },
//   FASTDesignSystemProvider.findProvider
// );

// export const backgroundDark50Behavior = cssCustomPropertyBehaviorFactory(
//   "background-dark-50",
//   (x: FASTDesignSystem): string => {
//     const background = parseColorString(x.backgroundColor);
//     return darkenViaLAB(background, 0.25).toStringHexRGB();
//   },
//   FASTDesignSystemProvider.findProvider
// );

// export const backgroundDark100Behavior = cssCustomPropertyBehaviorFactory(
//   "background-dark-100",
//   (x: FASTDesignSystem): string => {
//     const background = parseColorString(x.backgroundColor);
//     return darkenViaLAB(background, 0.5).toStringHexRGB();
//   },
//   FASTDesignSystemProvider.findProvider
// );