import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";

export const TableStyles = css`
  ${display("block")}

  :host {
    
  }

  ::slotted(ecos-table-row) {
    padding: 16px 0;
  }
`;