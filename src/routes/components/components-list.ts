import { customElement, IRouteViewModel } from 'aurelia';
import template from './components-list.html'
import components from './components.json';

@customElement({name: 'components-list', template})
export class ComponentsList implements IRouteViewModel {
  
  public componentsList = components;
  public filteringTag = 'all';
  public search = '';

  public get tags(): string[] {
    const tags = components.reduce((previousValue, currentValue) => {
      for (const badge of (currentValue as unknown as {badges: string[]}).badges) {
        if (!previousValue.includes(badge)) {
          previousValue.push(badge);
        }
      }
      return previousValue;
    }, []);
    return tags;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public getComponentsList(search: string, tag: string): any[] {
    return this.componentsList.filter((component) => {
      const foundWithSearch = search === ''
        || component.name.toLowerCase().includes(search.toLowerCase())
        || component.description.toLowerCase().includes(search.toLowerCase());
      const foundWithTag = tag === '' || tag === 'all'
        || (component as unknown as {badges: string[]}).badges.includes(tag);
      return foundWithSearch && foundWithTag;
    })
  }

}