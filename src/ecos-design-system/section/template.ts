import { html } from '@microsoft/fast-element';
import { EcosSection } from './index';

export const SectionTemplate = html<EcosSection>`
<template 
  class="ecos-section ${x => !x.verticalpadded ? 'no-vertical-padding' : ''} ${x => x.stacked ? 'ecos-stack' : ''}"
  style="--ecos-section-center-width: ${x => x.centerwidth};"
  >
  <slot></slot>
</template>`;