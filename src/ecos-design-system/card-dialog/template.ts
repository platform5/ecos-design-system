import { html, slotted, ref } from '@microsoft/fast-element';
import { EcosCardDialog } from './index';
export const EcosCardDialogTemplate = html<EcosCardDialog>`
<ecos-card part="card" fill-color="${x => x.fillColor}">
  <ecos-card-row ${ref("headerRow")} part="header" class="content">
    <slot name="header" ${slotted("headerNodes")}></slot>
  </ecos-card-row>
  <ecos-content separator part="content" class="content">
  <slot></slot>
  </ecos-content>
  <ecos-card-row ${ref("footerRow")} part="footer" class="footer">
    <ecos-inline-group>
      <slot name="footer-left" ${slotted("footerLeftNodes")}></slot>
    </ecos-inline-group>
    <ecos-inline-group ecos-card-row--right nowrap>
      <slot name="footer" ${slotted("footerNodes")}></slot>
    </ecos-inline-group>
  </ecos-card-row>
</ecos-card>`;