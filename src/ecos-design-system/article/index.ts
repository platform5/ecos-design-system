import { customElement, FASTElement, attr } from '@microsoft/fast-element';
import { ArticleStyles as styles } from './styles';
import { ArticleTemplate as template } from './template';

@customElement({
  name: 'ecos-article',
  template,
  styles
})
export class EcosArticle extends FASTElement {

  @attr()
  public imagesrc: string;

  public imagesrcChanged(): void {
    console.log('imagesrc', this.imagesrc);
  }

  @attr()
  public imageRatio = 4 / 3;
}