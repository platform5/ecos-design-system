import { html } from '@microsoft/fast-element';
import { EcosTableItem } from './index';

export const TableItemTemplate = html<EcosTableItem>`
<template>
  <label part="label">
    <slot name="label"></slot>
  </label>
  <slot></slot>
</template>`;