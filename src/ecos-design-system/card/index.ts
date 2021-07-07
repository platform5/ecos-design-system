import { cardStyles as styles, fillColor, SwatchRGB } from '@microsoft/fast-components';
import { attr, css } from '@microsoft/fast-element';
import { parseColorHexRGB } from '@microsoft/fast-colors';
import { cardTemplate as template, Card, ElementDefinitionContext, FoundationElementDefinition } from '@microsoft/fast-foundation';

import { lightenViaLAB, ColorRGBA64 } from "@microsoft/fast-colors";

// the min-content below ensure that the card, when used in a context of a stack
// correctly "ends" its content towards the bottom
export const fixedColorStyles = css`
  :host {
    height: min-content;
    contain: style;
  }
`;


const overrideStyles = (context: ElementDefinitionContext, definition: FoundationElementDefinition) => {
  return css`
    ${styles(context, definition)}
    ${fixedColorStyles}
  `
}

export class EcosCard extends Card {

  public connectedCallback(): void {
    super.connectedCallback();
    try {
      fillColor.setValueFor(this, (element) => {
        const fill = fillColor.getValueFor(element.parentElement) as SwatchRGB;
        const fillcolor = new ColorRGBA64(fill.r, fill.g, fill.b);
        const newFill = lightenViaLAB(fillcolor, 1);
        const swatch = SwatchRGB.create(newFill.r, newFill.g, newFill.b);
        return swatch;
      });
    } catch (error) {
      console.warn('Failed to process fillColor design token', this.fillColor);
    }
  }
  
  @attr()
  fillColor: string;

  public fillColorChanged(): void {
    try {
      const color = parseColorHexRGB(this.fillColor);
      if (color) {
        const swatch = SwatchRGB.create(color.r, color.g, color.b);
        fillColor.setValueFor(this, swatch);
      }
    } catch (error) {
      console.warn('Failed to process fillColorChanged', this.fillColor)
    }
  }
}

export const ecosCard = EcosCard.compose({
  baseName: 'card',
  template,
  styles: overrideStyles
});
