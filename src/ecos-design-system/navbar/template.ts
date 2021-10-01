import { html, ref, when } from '@microsoft/fast-element';
import { EcosNavbar } from './index';

export const NavbarTemplate = html<EcosNavbar>`
<template 
  class="
    ${x => x.fixed ? 'fixed':''}
    ${x => x.transparentFirst ? 'transparent-first':''}
    ${x => x.scrolled ? 'scrolled':''}
    navbar-layer-${x => x.layer}
    ${x => x.isMobileOpened ? 'mobile-opened': ''}
    ${x => x.isSecondaryOpened ? 'secondary-opened': ''}
    ">
  <div class="navbar" part="navbar" ${ref('navbarElement')}>
    <div class="navbar-content" part="navbar-content">
      <div class="branding" part="branding">
        <slot name="branding"></slot>
      </div>
      <div class="main" part="main" ${ref('mainContentSource')}>
        <slot name="main" ${ref('mainContentSlot')}></slot>
      </div>
      <div class="secondary" part="secondary" ${ref('secondaryContentSource')}>
        <slot name="secondary" ${ref('secondaryContentSlot')}></slot>
      </div>
      <div class="right-container" part="right-container">
        <div class="right" part="right" ${ref('rightContentSource')}>
          <slot name="right" ${ref('rightContentSlot')}></slot>
        </div>
        <div class="secondary-toggler" part="secondary-toggler" ${ref('secondaryTogglerElement')} @click="${x => x.toggleSecondary()}">
          <slot name="secondary-toggler"></slot>
        </div>
      </div>
      <div class="toggler" part="toggler" ${ref('mobileTogglerElement')} @click="${x => x.toggle()}">
        ${when(x => !x.isMobileOpened, html<EcosNavbar>`
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
        </svg>
        `)}
        ${when(x => x.isMobileOpened, html<EcosNavbar>`
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
        `)}
      </div>
    </div>
  </div>
  <div hidden class="secondary-content" part="secondary-content" ${ref('secondaryContentElement')}>

  </div>
  <div hidden class="mobile-content" part="mobile-content" ${ref('mobileContentElement')}>
    <div class="mobile-main" part="mobile-main" ${ref('mainContentMobileContainer')}>
    </div>
    <div class="right-secondary" part="mobile-right" ${ref('rightContentMobileContainer')}>
    </div>
    <div class="mobile-secondary" part="mobile-secondary" ${ref('secondaryContentMobileContainer')}>
    </div>
  </div>
</template>`;