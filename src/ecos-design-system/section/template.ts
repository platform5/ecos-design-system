import { html, slotted } from '@microsoft/fast-element';
import { EcosSection } from './index';

export const SectionTemplate = html<EcosSection>`
<template 
  style="--ecos-section-center-width: ${x => x.centerwidth};"
  >
  <slot ${slotted('nodes')}></slot>
</template>`;