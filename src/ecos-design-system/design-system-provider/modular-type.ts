import { FASTDesignSystemProvider } from '@microsoft/fast-components';
import modularScale from 'modular-scale';

export function setTypeRamp(
  system: FASTDesignSystemProvider,
  ratio: number,
  lineHeightRatio = 1.2
  ): void {
  const base = system.typeRampBaseFontSize;
  const ms = modularScale({ratio, base});
  system.typeRampBaseFontSize = `${ms(0)}px`;
  system.typeRampBaseLineHeight = `${ms(0) * lineHeightRatio}px`;
  system.typeRampMinus1FontSize = `${ms(-1)}px`;
  system.typeRampMinus1LineHeight = `${ms(-1) * lineHeightRatio}px`;
  system.typeRampMinus2FontSize = `${ms(-2)}px`;
  system.typeRampMinus2LineHeight = `${ms(-2) * lineHeightRatio}px`;
  system.typeRampPlus1FontSize = `${ms(1)}px`;
  system.typeRampPlus1LineHeight = `${ms(1) * lineHeightRatio}px`;
  system.typeRampPlus2FontSize = `${ms(2)}px`;
  system.typeRampPlus2LineHeight = `${ms(2) * lineHeightRatio}px`;
  system.typeRampPlus3FontSize = `${ms(3)}px`;
  system.typeRampPlus3LineHeight = `${ms(3) * lineHeightRatio}px`;
  system.typeRampPlus4FontSize = `${ms(4)}px`;
  system.typeRampPlus4LineHeight = `${ms(4) * lineHeightRatio}px`;
  system.typeRampPlus5FontSize = `${ms(5)}px`;
  system.typeRampPlus5LineHeight = `${ms(5) * lineHeightRatio}px`;
  system.typeRampPlus6FontSize = `${ms(6)}px`;
  system.typeRampPlus6LineHeight = `${ms(6) * lineHeightRatio}px`;
}