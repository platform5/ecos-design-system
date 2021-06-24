import { css } from '@microsoft/fast-element';

export const SectionStyles = css`

  :host {
    display: grid;
    contain: content;
    --ecos-section-center-width: 60ch;
  }
  :host([nocontain]) {
    contain: unset;
  }

  :host {
    grid-template-columns: 1fr min(var(--ecos-section-center-width), calc(100% - 2 * var(--spacing-unit-lg))) 1fr;
    grid-column-gap: var(--spacing-unit-lg);
  }

  :host(:not([no-vertical-padding])) {
    padding-top: var(--spacing-unit-lg);
    padding-bottom: var(--spacing-unit-lg);
  }
  :host([largev]) {
    padding-top: var(--spacing-unit-xxl);
    padding-bottom: var(--spacing-unit-xxl);
  }

  ::slotted(.section-item) {
    grid-column: 2;
    /* this prevent content of the grid item from growing */
    /* https://stackoverflow.com/questions/43311943/prevent-content-from-expanding-grid-items */
    min-width: 0; 
  }
  ::slotted(.full-bleed) {
    grid-column: 1 / -1;
    width: 100%;
  }
  @media screen and (max-width: 732px) {
    ::slotted(.mobile-full-bleed) {
      grid-column: 1 / -1;
      width: 100%;
    }
  }
  ::slotted(.padded-full-bleed) {
    grid-column: 1 / -1;
    width: 100%;
    padding-left: var(--spacing-unit-lg);
    padding-right: var(--spacing-unit-lg);
  }
  ::slotted(.larger) {
    grid-column: 1 / -1;
  }
  @media screen and (min-width: 900px) {
    ::slotted(.larger) {
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;