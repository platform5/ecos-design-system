import { html, slotted } from '@microsoft/fast-element';
import { EcosStack } from './index';

export const StackTemplate = html<EcosStack>`
<template>
  <slot ${slotted('nodes')}></slot>
</template>`;