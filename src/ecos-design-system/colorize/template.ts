import { html } from '@microsoft/fast-element';
import { EcosColorize } from './index';

export const ColorizeTemplate = html<EcosColorize>`
<slot></slot>
<span part="colorizer" class="colorizer"></span>
`;