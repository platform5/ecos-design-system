import {
  typeRampBaseFontSize,
  typeRampBaseLineHeight,
  typeRampMinus1FontSize,
  typeRampMinus1LineHeight,
  typeRampMinus2FontSize,
  typeRampMinus2LineHeight,
  typeRampPlus1FontSize,
  typeRampPlus1LineHeight,
  typeRampPlus2FontSize,
  typeRampPlus2LineHeight,
  typeRampPlus3FontSize,
  typeRampPlus3LineHeight,
  typeRampPlus4FontSize,
  typeRampPlus4LineHeight,
  typeRampPlus5FontSize,
  typeRampPlus5LineHeight,
  typeRampPlus6FontSize,
  typeRampPlus6LineHeight
} from '@microsoft/fast-components';
import modularScale from 'modular-scale';

 export function setTypeRamp(
    element: HTMLElement,
    ratio: number,
    lineHeightRatio = 1.2
  ): void {
    const base = parseFloat(typeRampBaseFontSize.getValueFor(element));
    const ms = modularScale({ratio, base});
    typeRampBaseLineHeight.setValueFor(element, `${ms(0) * lineHeightRatio}px`);
    typeRampMinus1FontSize.setValueFor(element, `${ms(-1)}px`);
    typeRampMinus1LineHeight.setValueFor(element, `${ms(-1) * lineHeightRatio}px`);
    typeRampMinus2FontSize.setValueFor(element, `${ms(-2)}px`);
    typeRampMinus2LineHeight.setValueFor(element, `${ms(-2) * lineHeightRatio}px`);
    typeRampPlus1FontSize.setValueFor(element, `${ms(1)}px`);
    typeRampPlus1LineHeight.setValueFor(element, `${ms(1) * lineHeightRatio}px`);
    typeRampPlus2FontSize.setValueFor(element, `${ms(2)}px`);
    typeRampPlus2LineHeight.setValueFor(element, `${ms(2) * lineHeightRatio}px`);
    typeRampPlus3FontSize.setValueFor(element, `${ms(3)}px`);
    typeRampPlus3LineHeight.setValueFor(element, `${ms(3) * lineHeightRatio}px`);
    typeRampPlus4FontSize.setValueFor(element, `${ms(4)}px`);
    typeRampPlus4LineHeight.setValueFor(element, `${ms(4) * lineHeightRatio}px`);
    typeRampPlus5FontSize.setValueFor(element, `${ms(5)}px`);
    typeRampPlus5LineHeight.setValueFor(element, `${ms(5) * lineHeightRatio}px`);
    typeRampPlus6FontSize.setValueFor(element, `${ms(6)}px`);
    typeRampPlus6LineHeight.setValueFor(element, `${ms(6) * lineHeightRatio}px`);
}