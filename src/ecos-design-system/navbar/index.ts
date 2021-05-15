import { customElement, FASTElement, attr, observable } from '@microsoft/fast-element';
import { NavbarStyles as styles } from './styles';
import { NavbarTemplate as template } from './template';

@customElement({
  name: 'ecos-navbar',
  template,
  styles
})
export class EcosNavbar extends FASTElement {

  @attr()
  public layer = '4';

  @attr({mode: 'boolean'})
  public fixed = true;

  @attr({mode: 'boolean', attribute: 'transparent-first'})
  public transparentFirst = false;

  @attr({attribute: 'scrolling-container-selector'})
  public scrollingContainerSelector = '';

  @observable
  public scrolled = false;

  public navbarElement: HTMLElement;
  public mobileTogglerElement: HTMLElement;
  public secondaryTogglerElement: HTMLElement;

  // slots for naviation contents
  public mainContentSlot: HTMLElement;
  public secondaryContentSlot: HTMLElement;

  // sources of the content to bring it back after opening mobile / secondary
  public mainContentSource: HTMLElement;
  public secondaryContentSource: HTMLElement;

  // secondary container for opening the secondary (more) content area
  public secondaryContentElement: HTMLElement;

  // mobiles containers for when the elements must be opened on mobile
  public mainContentMobileContainer: HTMLElement;
  public secondaryContentMobileContainer: HTMLElement;

  // mobile element to open
  public mobileContentElement: HTMLElement;

  @observable
  public isMobileOpened = false;

  @observable
  public isSecondaryOpened = false;

  public connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('click', this);
    this.addScrollListener();
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('click', this);
    this.removeScrollListener();
  }

  public addScrollListener(): void {
    if (!this.scrollingContainerSelector) {
      document.addEventListener('scroll', this);
    } else {
      const scrollingContainer = document.querySelector(this.scrollingContainerSelector);
      scrollingContainer.addEventListener('scroll', this);
    }
  }

  public removeScrollListener(): void {
    if (!this.scrollingContainerSelector) {
      document.removeEventListener('scroll', this);
    } else {
      const scrollingContainer = document.querySelector(this.scrollingContainerSelector);
      scrollingContainer.removeEventListener('scroll', this);
    }
  }

  public handleEvent(event: MouseEvent | Event): void {
    if (event instanceof MouseEvent) {
      this.handleClick(event);
    } else {
      this.handleScroll(event);
    }
  }

  public handleClick(event: MouseEvent): void {
    for (const element of event.composedPath()) {
      if (element === this.secondaryTogglerElement) {
        return;
      }
      if (element === this.mobileTogglerElement) {
        return;
      }
    }
    if (this.isMobileOpened) {
      this.toggle();
    }
    if (this.isSecondaryOpened) {
      this.toggleSecondary();
    }
  }

  public handleScroll(event: Event): void {
    if (event.target instanceof HTMLElement) {
      this.scrolled = event.target.scrollTop > 20;
    } else {
      this.scrolled = window.scrollY > 20;
    }
  }

  public toggle(): void {
    if (!this.isMobileOpened) {
      this.mainContentMobileContainer.appendChild(this.mainContentSlot);
      this.secondaryContentMobileContainer.appendChild(this.secondaryContentSlot);
    } else {
      this.mainContentSource.appendChild(this.mainContentSlot);
      this.secondaryContentSource.appendChild(this.secondaryContentSlot);
    }
    this.isMobileOpened = !this.isMobileOpened;
    this.mobileContentElement.toggleAttribute('hidden', !this.isMobileOpened);
  }

  public toggleSecondary(): void {
    if (!this.isSecondaryOpened) {
      this.navbarElement.classList.toggle('secondary-opened', true);
      this.secondaryContentElement.appendChild(this.secondaryContentSlot);
    } else {
      this.navbarElement.classList.toggle('secondary-opened', false);
      this.secondaryContentSource.appendChild(this.secondaryContentSlot);
    }
    this.isSecondaryOpened = !this.isSecondaryOpened;
    this.secondaryContentElement.toggleAttribute('hidden', !this.isSecondaryOpened);
  }

}