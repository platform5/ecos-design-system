import { FASTBreadcrumb, FASTBreadcrumbItem } from '@microsoft/fast-components';
import { customElement } from '@microsoft/fast-element';
import { BreadcrumbTemplate as template } from '@microsoft/fast-foundation';
import { BreadcrumbItemTemplate as templateItem } from '@microsoft/fast-foundation';
// Breadcrumb styles are not (yet) exposed from fast-components
import { BreadcrumbStyles as styles } from './styles';
import { BreadcrumbItemStyles as itemStyles } from './item-styles';

@customElement({
  name: "ecos-breadcrumb",
  template,
  styles
})
export class EcosBreadcrumb extends FASTBreadcrumb {}

@customElement({
  name: "ecos-breadcrumb-item",
  template: templateItem,
  styles: itemStyles,
  shadowOptions: {
    delegatesFocus: true,
  },
})
export class EcosBreadcrumbItem extends FASTBreadcrumbItem {}