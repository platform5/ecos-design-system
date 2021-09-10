import { html, slotted } from '@microsoft/fast-element';
import { EcosSection } from './index';

export const SectionTemplate = html<EcosSection>`<slot ${slotted('nodes')}></slot>`;