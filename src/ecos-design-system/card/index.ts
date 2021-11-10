import { cardStyles as styles, fillColor, isDark, SwatchRGB, Card } from '@microsoft/fast-components';
import { attr, css } from '@microsoft/fast-element';
import { parseColorHexRGB } from '@microsoft/fast-colors';
import { cardTemplate as template, ElementDefinitionContext, FoundationElementDefinition } from '@microsoft/fast-foundation';

import { lightenViaLAB, darkenViaLAB, ColorRGBA64 } from "@microsoft/fast-colors";

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
    this.fillColorChanged();
  }
  
  @attr({attribute: 'fill-color'})
  fillColor: 'lighten' | 'darken' | 'auto' | 'unset' | string = 'auto';

  public fillColorChanged(): void {
    if (!this.$fastController.isConnected) {
      return;
    }
    if (this.fillColor === 'unset') {
      this.unsetFillcolor();
    } else if (['lighten', 'darken', 'auto'].includes(this.fillColor)) {
      this.autoFillColor(this.fillColor as 'lighten' | 'darken' | 'auto');
    } else {
      this.setFillColor(this.fillColor);
    }
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

  private autoFillColor(action: 'lighten' | 'darken' | 'auto'): void {

    try {
      fillColor.setValueFor(this, (element) => {
        const parentFillColor = fillColor.getValueFor(this.parentElement || this.ownerDocument.body) as SwatchRGB;
        let effectiveAction = action;
        if (action === 'auto') {
          if (isDark(parentFillColor)) {
            effectiveAction = 'lighten';
          } else if(parentFillColor.r === 1 && parentFillColor.g === 1 && parentFillColor.b === 1) {
            // isWhite
            effectiveAction = 'darken';
          } else {
            effectiveAction = 'lighten';
          }
        }

        const fill = fillColor.getValueFor(element.parentElement || element.ownerDocument.body) as SwatchRGB;
        const fillcolor = new ColorRGBA64(fill.r, fill.g, fill.b);
        const newFill = effectiveAction === 'lighten' ? lightenViaLAB(fillcolor, 0.2) : darkenViaLAB(fillcolor, 0.2);
        const swatch = SwatchRGB.create(newFill.r, newFill.g, newFill.b);
        return swatch;
      });
    } catch (error) {
      console.warn('Failed to process fillColor design token', this.fillColor);
    }
  }

  private unsetFillcolor(): void {
    fillColor.deleteValueFor(this);
  }

  private setFillColor(color: string): void {
    try {
      const parsedColor = parseColorHexRGB(color);
      if (parsedColor) {
        const swatch = SwatchRGB.create(parsedColor.r, parsedColor.g, parsedColor.b);
        fillColor.setValueFor(this, swatch);
      }
    } catch (error) {
      console.warn('Failed to process fillColorChanged', color)
    }
  }
}

export const ecosCard = EcosCard.compose({
  baseName: 'card',
  template,
  styles: overrideStyles
});
