import { neutralLayerFloating, neutralLayer3, neutralFillActive, neutralStrokeDividerRest } from '@microsoft/fast-components';
import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";

export const TableStyles = css`
  ${display("block")}

  :host {
    
  }

  ::slotted(ecos-table-row) {
    padding: 16px 0;
  }

  ::slotted(ecos-table-row.active) {
    padding: 16px 0;
    background: ${neutralFillActive};
  }

  :host([hoverable]) ::slotted(ecos-table-row){
    padding-left: var(--responsive-spacing-unit-lg);
    padding-right: var(--responsive-spacing-unit-lg);
  }

  :host([separated]) {
    background: transparent;
    border: none;
    box-shadow: none;
  }
  
  :host([separated]) ::slotted(ecos-table-row) {
    border-radius: calc(var(--control-corner-radius) * 1px);
    background-color: ${neutralLayerFloating};
    margin-left: 0;
    margin-right: 0;
    margin-top: 8px;
    padding-left: var(--responsive-spacing-unit-lg);
    padding-right: var(--responsive-spacing-unit-lg);
  }
  :host([separated][hoverable]) ::slotted(ecos-table-row:hover) {
    border-radius: calc(var(--control-corner-radius) * 1px);
    background: ${neutralLayer3};
  }
  :host([separated]) ::slotted(ecos-table-row:first-child) {
    margin-top: 0px;
  }

  :host([bordered]) {
    background: transparent;
    border: none;
    box-shadow: none;
  }
  
  :host([bordered]) ::slotted(ecos-table-row) {
    border-radius: 0;
    margin-left: 0;
    margin-right: 0;
    min-height: calc(var(--spacing-unit-xl) * 1.5);
    border-top: 1px solid ${neutralStrokeDividerRest};
  }
  :host([bordered][hoverable]) ::slotted(ecos-table-row:hover) {
    background: ${neutralLayer3}
  }
  :host([bordered]) ::slotted(ecos-table-row:first-child) {
    border-top: none;
  }
`;