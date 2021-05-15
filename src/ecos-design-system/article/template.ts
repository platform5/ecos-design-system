import { html } from '@microsoft/fast-element';
import { EcosArticle } from './index';

export const ArticleTemplate = html<EcosArticle>`
<div
  class="image"
  part="image"
  style="padding-top: ${x => 1 / x.imageRatio * 100}%;">
    <div class="image-background" style="margin-top: ${x => -1 / x.imageRatio * 100}%;background-image: url(${x => x.imageSrc});"></div>
</div>
<div class="button" part="button">
  <slot name="button"></slot>
</div>
<div class="content" part="content">
  <slot></slot>
</div>`;