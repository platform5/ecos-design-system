import { cardStyles as styles, fillColor, isDark, SwatchRGB, Card } from '@microsoft/fast-components';
import { attr, css, observable } from '@microsoft/fast-element';
import { parseColorHexRGB } from '@microsoft/fast-colors';
import { cardTemplate as template, DesignTokenSubscriber, ElementDefinitionContext, FoundationElementDefinition } from '@microsoft/fast-foundation';

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

  @observable
  private effectiveFillColor: 'unset' | string = 'unset';

  private effectiveParentElement: HTMLElement;
  private parentElementFillColorHanlder: DesignTokenSubscriber<typeof fillColor> = {
    handleChange: () => {
      this.determineEffectiveFillColor();
    }
  }

  private determineEffectiveFillColor(): void {
    if (!this.effectiveParentElement) {
      return;
    }
    const parentFillColor = fillColor.getValueFor(this.effectiveParentElement) as SwatchRGB;

    let effectiveAction = 'auto';
    if (this.fillColor === 'auto') {
      if (isDark(parentFillColor)) {
        effectiveAction = 'lighten';
      } else if(parentFillColor.r === 1 && parentFillColor.g === 1 && parentFillColor.b === 1) {
        // isWhite
        effectiveAction = 'darken';
      } else {
        effectiveAction = 'lighten';
      }
    } else if (this.fillColor === 'darken' || this.fillColor === 'lighten') {
      effectiveAction = this.fillColor;
    }

    const fillcolor = new ColorRGBA64(parentFillColor.r, parentFillColor.g, parentFillColor.b);
    const newFill = effectiveAction === 'lighten' ? lightenViaLAB(fillcolor, 0.2) : darkenViaLAB(fillcolor, 0.2);
    const swatch = SwatchRGB.create(newFill.r, newFill.g, newFill.b);
    this.effectiveFillColor = swatch.toColorString();
  }

  public fillColorChanged(): void {
    if (!this.$fastController.isConnected) {
      return;
    }

    if (this.fillColor === 'auto' || this.fillColor === 'lighten' || this.fillColor === 'darken') {
      this.effectiveParentElement = this.parentElement || this.ownerDocument.body;
      if (this.effectiveParentElement) {
        fillColor.subscribe(this.parentElementFillColorHanlder, this.effectiveParentElement);
      }
      this.determineEffectiveFillColor();
    } else {
      if (this.effectiveParentElement) {
        fillColor.unsubscribe(this.parentElementFillColorHanlder, this.effectiveParentElement)
      }
      this.effectiveFillColor = this.fillColor;
    }

  }
  
  public effectiveFillColorChanged(): void {
    if (!this.$fastController.isConnected) {
      return;
    }
    if (this.effectiveFillColor === 'unset') {
      this.unsetFillcolor();
    } else {
      // here this.fillColor is a string of color
      this.setFillColor(this.effectiveFillColor);
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
