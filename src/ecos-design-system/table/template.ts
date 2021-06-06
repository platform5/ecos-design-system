import { html } from '@microsoft/fast-element';
import { EcosTable } from './index';

export const TableTemplate = html<EcosTable>`
<template>
  <slot></slot>
</template>`;