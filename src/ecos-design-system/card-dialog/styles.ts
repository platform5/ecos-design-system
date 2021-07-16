import { css } from '@microsoft/fast-element';

export const EcosCardDialogStyles = css`
:host([auto-height]) {
  max-height: 100%;
}
:host([auto-height]) .card {
  max-height: 100vh;
  display: flex;
  flex-direction: column;
}
:host([auto-height]) .header {
  flex-shrink: 0;
}
:host([auto-height]) .footer {
  flex-shrink: 0;
}
:host([auto-height]) .content {
  flex-shrink: 1;
  overflow-y: auto;
}
@media screen and (min-width: 732px) {
  :host([auto-height]) .card {
    max-height: 80vh;
  }
}

`;