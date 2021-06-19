import { html, slotted } from '@microsoft/fast-element';
import { EcosNext } from './index';

export const NextTemplate = html<EcosNext>`
<template>
  <slot part="next-items" ${slotted("items")}></slot>
</template>`;