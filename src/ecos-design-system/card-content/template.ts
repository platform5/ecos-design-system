import { html } from '@microsoft/fast-element';
import { EcosCardContent } from './index';

export const CardContentTemplate = html<EcosCardContent>`<slot></slot>`;