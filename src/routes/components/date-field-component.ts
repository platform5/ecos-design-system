import { dateLocale, DateLocale } from '../../ecos-design-system';
import { inject } from 'aurelia';
import { frCH } from 'date-fns/locale';

@inject(Element)
export class DateFieldComponent {

  public date: Date | undefined;
  public dates: Date[] | undefined;
  public from: Date | undefined;
  public end: Date | undefined;

  public min: Date | undefined;
  public max: Date | undefined;
  public disabledDates: Date[] = [];

  constructor(private element: HTMLElement) {
    dateLocale.setValueFor(this.element, new DateLocale(frCH));
    this.min = new Date();
    this.min.setDate(this.min.getDate() - 5);
    this.max = new Date();
    this.max.setDate(this.max.getDate() + 5);
    const disabledDate = new Date();
    disabledDate.setDate(disabledDate.getDate() + 2);
    this.disabledDates.push(disabledDate);
  }

}