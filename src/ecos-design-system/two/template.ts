import { html } from '@microsoft/fast-element';
import { EcosTwo } from './index';

export const TwoTemplate = html<EcosTwo>`
<template class="ecos-two ${x => x.rightleft ? 'rightleft' : ''}">
  <slot></slot>
</template>`;