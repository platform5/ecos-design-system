import { customElement } from 'aurelia';
import template from './components-index.html';
import { ComponentsList } from './components-list';

@customElement({name: 'components-index', template, dependencies: [ComponentsList]})
export class ComponentsIndex {}