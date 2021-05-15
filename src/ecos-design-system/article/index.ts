import { customElement, FASTElement, attr } from '@microsoft/fast-element';
import { ArticleStyles as styles } from './styles';
import { ArticleTemplate as template } from './template';

@customElement({
  name: 'ecos-article',
  template,
  styles
})
export class EcosArticle extends FASTElement {

  @attr({attribute: 'image-src'})
  public imageSrc: string;

  @attr({attribute: 'image-ratio'})
  public imageRatio = 4 / 3;
}