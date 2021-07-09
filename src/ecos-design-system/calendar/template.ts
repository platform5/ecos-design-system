import { html, repeat, ref } from '@microsoft/fast-element';
import { EcosCalendar, EcosCalendarDay } from './index';
import { format } from '../dates';

export const CalendarTemplate = html<EcosCalendar>`
<div class="header" part="header">

  <ecos-select @change="${(x, c) => x.month = (c.event as CustomEvent).detail.value}" ${ref('monthSelector')}>
    ${repeat(x => x.monthNumbers, html<number, EcosCalendar>`
      <ecos-option value="${x => x}" ?selected="${(x, c) => x === c.parent.month}">
      ${(x, c) => format(new Date(c.parent.year, x, 1, 0, 0, 0, 0), 'MMMM', c.parent)}
      </ecos-option>
    `)}
  </ecos-select>

  <ecos-select @change="${(x, c) => x.year = (c.event as CustomEvent).detail.value}" ${ref('yearSelector')}>
    ${repeat(x => x.years, html<number, EcosCalendar>`
      <ecos-option value="${x => x}" ?selected="${(x, c) => x === c.parent.year}">
      ${(x) => x}
      </ecos-option>
    `)}
  </ecos-select>

  <ecos-button @click="${x => x.month = x.month - 1}">
    <ecos-icon icon="ChevronLeft"></ecos-icon>
  </ecos-button>
  <ecos-button @click="${x => x.month = x.month + 1}">
    <ecos-icon icon="ChevronRight"></ecos-icon>
  </ecos-button>
</div>
<div class="weekdays" part="weekdays">
${repeat(x => x.days.slice(0, 7), html<EcosCalendarDay, EcosCalendar>`
  <span>${(x, c) => format(x.date, 'EEEEE', (c.parent))}</span>
`)}
</div>
<div class="days" part="days">
  ${repeat(x => x.days, html<EcosCalendarDay, EcosCalendar>`  
    <ecos-button 
      class="day ${x => x.selected ? 'selected' : ''} ${x => x.today ? 'today' : ''} day-${x => x.weekday} ${x => x.currentMonth ? 'current-month':''}" 
      appearance="${(x, c) => x.selected ? 'accent' : c.parent.appearance}"
      ?disabled="${x => x.disabled}"
      @click="${(x, c) => c.parent.selectDay(x.date)}">
        <span>${x => x.number}</span>
      </ecos-button>
  `)}
</div>
`;