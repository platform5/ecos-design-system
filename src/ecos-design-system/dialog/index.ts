import { FASTDialog, DialogStyles as styles } from '@microsoft/fast-components';
import { attr, customElement, html } from '@microsoft/fast-element';
import { DialogTemplate as template } from '@microsoft/fast-foundation';
import { fadingStyles } from './styles';

const template2 = html<EcosDialog>`<template class="ecos-dialog--${x => x.effect}">${template}</template>`;

@customElement({
  name: "ecos-dialog",
  template: template2,
  styles: [styles, fadingStyles]
})
export class EcosDialog extends FASTDialog {

  @attr()
  public effect = '';
}