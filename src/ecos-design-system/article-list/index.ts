import { customElement, FASTElement } from '@microsoft/fast-element';
import { ArticleListStyles as styles } from './styles';
import { ArticleListTemplate as template } from './template';

@customElement({
  name: 'ecos-article-list',
  template,
  styles
})
export class EcosArticleList extends FASTElement {
  
}