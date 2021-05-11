import { css } from '@microsoft/fast-element';

export const SectionStyles = css`

  .ecos-section {
    display: grid;
    contain: content;
    --ecos-section-center-width: 60ch;
  }
  .ecos-section[nocontain] {
    contain: inherit;
  }

  .ecos-section {
    grid-template-columns: 1fr min(var(--ecos-section-center-width), calc(100% - 2 * var(--spacing-unit))) 1fr;
    grid-column-gap: var(--spacing-unit);
  }

  .ecos-section:not(.no-vertical-padding) {
    padding-top: var(--spacing-unit);
    padding-bottom: var(--spacing-unit);
  }
  .ecos-section.largev:not(.no-vertical-padding) {
    padding-top: calc(var(--spacing-unit) * 2);
    padding-bottom: calc(var(--spacing-unit) * 2);
  }

  .ecos-section > * {
    grid-column: 2;
    /* this prevent content of the grid item from growing */
    /* https://stackoverflow.com/questions/43311943/prevent-content-from-expanding-grid-items */
    min-width: 0; 
  }
  .ecos-section > .full-bleed {
    grid-column: 1 / -1;
    width: 100%;
  }
  @media screen and (max-width: 732px) {
    .ecos-section > .mobile-full-bleed {
      grid-column: 1 / -1;
      width: 100%;
    }
  }
  .ecos-section > .padded-full-bleed {
    grid-column: 1 / -1;
    width: 100%;
    padding-left: var(--spacing-unit);
    padding-right: var(--spacing-unit);
  }
  .ecos-section > .larger {
    grid-column: 1 / -1;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
`;