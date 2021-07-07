import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";

export const CollectionStyles = css`
  ${display("grid")}

  :host {
    contain: style;
    display: grid;
    justify-content: center;
    grid-gap: var(--responsive-spacing-unit-xl);
    grid-template-columns: repeat(auto-fit, minmax(var(--ecos-collection-min-item-width), 1fr));
  }
  
  @media screen and (min-width: 732px) {
    :host {
      grid-template-columns: repeat(auto-fit, minmax(var(--ecos-collection-min-item-width), 1fr));
    }
  }
`;