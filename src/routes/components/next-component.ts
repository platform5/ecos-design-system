import { EcosNext } from './../../ecos-design-system/next/index';

export class NextComponent {
  public nextElement: EcosNext;

  public next(): void {
    this.nextElement.next();
  }

  public prev(): void {
    this.nextElement.prev();
  }

  public goto(id: string, direction: 'prev' | 'next' | 'auto'): void {
    this.nextElement.goToId(id, direction);
  }
}