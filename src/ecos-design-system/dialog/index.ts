import { dialogStyles as styles } from '@microsoft/fast-components';
import { attr, html, css } from '@microsoft/fast-element';
import { dialogTemplate as template, Dialog, ElementDefinitionContext, FoundationElementDefinition } from '@microsoft/fast-foundation';
import { fadingStyles } from './styles';

const overrideStyles = (context: ElementDefinitionContext, definition: FoundationElementDefinition) => {
  return css`
    ${styles(context, definition)}
    ${fadingStyles}
  `
};

const template2 = html<EcosDialog>`<template class="ecos-dialog--${x => x.effect}">${template}</template>`;

export class EcosDialog extends Dialog {

  @attr()
  public effect = '';

  // public connectedCallback(): void {
  //   super.connectedCallback();
  //   this.addEventListener('slotchange', this);
  // }

  // public disconnectedCallback(): void {
  //   super.disconnectedCallback();
  //   this.removeEventListener('slotchange', this);
  // }

  // public handleEvent(): void {
  //   console.log('handle slotchange');
  //   const slotElement = this.shadowRoot.querySelector('slot');
  //   console.log('slotElement', slotElement);
  // }

  // public detectEcosCardDialog(): void {

  // }
}

export const ecosDialog = EcosDialog.compose({
  baseName: 'dialog',
  template: template2,
  styles: overrideStyles
});