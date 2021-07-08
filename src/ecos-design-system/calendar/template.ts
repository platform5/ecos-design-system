import { html, repeat } from '@microsoft/fast-element';
import { EcosCalendar, EcosCalendarDay } from './index';

export const CalendarTemplate = html<EcosCalendar>`
<div class="days" part="days">
  ${repeat(x => x.days, html<EcosCalendarDay, EcosCalendar>`  
    <ecos-button 
      class="day ${x => x.selected ? 'selected' : ''} ${x => x.today ? 'today' : ''} day-${x => x.weekday}" 
      appearance="${(x, c) => x.selected ? 'accent' : c.parent.appearance}"
      ?disabled="${x => x.disabled}"
      @click="${(x, c) => c.parent.selectDay(x.date)}">
        <span>${x => x.number}</span>
      </ecos-button>
  `)}
</div>
`;