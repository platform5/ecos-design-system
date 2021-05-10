import { html } from '@microsoft/fast-element';
import { EcosIcon } from './index';

export const IconTemplate = html<EcosIcon>`<span class="${x => x.button ? 'button':''} ${x => x.accent ? 'accent':''} ${x => x.lightweight ? 'lightweight':''}"></span>`;