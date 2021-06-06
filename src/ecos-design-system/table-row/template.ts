import { html } from '@microsoft/fast-element';
import { EcosTableRow } from './index';
import { startTemplate, endTemplate } from '@microsoft/fast-foundation';
import type { ViewTemplate } from "@microsoft/fast-element";

export const TableRowTemplate: ViewTemplate<EcosTableRow> = html`
<template>
  ${startTemplate}
  <div class="content" part="content">
    <slot></slot>
  </div>
  ${endTemplate}
</template>`;