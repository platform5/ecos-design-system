import { html } from '@microsoft/fast-element';

export const StackTemplate = html`<template class="ecos-stack ${x => x.small ? 'ecos-stack--small' : ''} ${x => x.large ? 'ecos-stack--large' : ''}"><slot></slot></template>`;