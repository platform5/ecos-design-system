import { customElement, IRouteViewModel } from 'aurelia';
import template from './components-list.html'
import components from './components.json';

@customElement({name: 'components-list', template})
export class ComponentsList implements IRouteViewModel {
  
  public componentsList = components;


}