import { customElement, IRouteViewModel } from 'aurelia';
import template from './guides-list.html'
import guides from './guides.json';

@customElement({name: 'guides-list', template})
export class GuidesList implements IRouteViewModel {
  
  public guidesList = guides;
  public filteringTag = 'all';
  public search = '';

  public get tags(): string[] {
    const tags = guides.reduce((previousValue, currentValue) => {
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
  public getGuidesList(search: string, tag: string): any[] {
    return this.guidesList.filter((guide) => {
      const foundWithSearch = search === ''
        || guide.name.toLowerCase().includes(search.toLowerCase())
        || guide.description.toLowerCase().includes(search.toLowerCase());
      const foundWithTag = tag === '' || tag === 'all'
        || (guide as unknown as {badges: string[]}).badges.includes(tag);
      return foundWithSearch && foundWithTag;
    })
  }

}