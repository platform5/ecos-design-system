import { html } from '@microsoft/fast-element';
import { EcosCollection } from './index';

export const CollectionTemplate = html<EcosCollection>`<template style="--ecos-collection-min-item-width: ${x => x.minitemwidth};"><slot></slot></template>`;