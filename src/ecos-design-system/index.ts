import 'modern-css-reset';

export * from './anchor';
export * from './article';
export * from './article-list';
export * from './button';
export * from './button-3d';
export * from './card';
export * from './collection';
export * from './colorize';
export * from './design-system-provider';
export * from './dialog';
export * from './form';
export * from './form-row';
export * from './icon';
export * from './navbar';
export * from './section';
export * from './slider';
export * from './stack';

export * from './ecos-aurelia-adapter';
import './utilities.css';
import './compositions.css';

import { navbarHeightNumber } from './navbar/styles';
const navbarContentStyles = document.createElement(`style`);
navbarContentStyles.innerHTML = `.navbar-content {padding-top: calc((${navbarHeightNumber}) * 1px)}`;
document.head.appendChild(navbarContentStyles);