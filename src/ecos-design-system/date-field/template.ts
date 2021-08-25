import { html, ref } from '@microsoft/fast-element';
import { EcosDateField } from './index';

export const DateFieldTemplate = html<EcosDateField>`
<template
  role="combobox"
  tabindex="${x => (!x.disabled ? "0" : null)}"
  aria-disabled="${x => x.ariaDisabled}"
  aria-expanded="${x => x.ariaExpanded}"
  >

  <ecos-text-field
    class="control hide-picker-indicator"
    part="control" 
    type="date"
    :value="${x => x.value}"
    ?disabled="${x => x.disabled}"
    :appearance="${x => x.appearance}"
    @change="${(x, c) => x.fieldDateChanged(c.event as CustomEvent)}"
    >
    <ecos-icon class="calendar-icon" part="calendar-icon" icon="Calendar" slot="end" @click="${x => x.togglePicker()}" ${ref('calendarIconElement')}></ecos-icon>
  </ecos-text-field>
  <ecos-anchored-region
    ${ref('pickerElement')} 
    ?hidden="${x => !x.pickerOpened}"
    class="picker"
    part="picker"
    anchor="${x => x.id || x.textFieldId}"
    auto-update-mode="auto"
    vertical-positioning-mode="locktodefault"
    vertical-threshold="100"
    vertical-default-position="bottom"
    horizontal-default-position="left"
    horizontal-inset="true"
    horizontal-positioning-mode="locktodefault"
    >
    <ecos-calendar
      class="calendar"
      part="calendar"
      :date="${x => x.value}"
      :month="${x => x.month}"
      :year="${x => x.year}"
      :appearance="${x => x.calendaAppearance}"
      :min="${x => x.min}"
      :max="${x => x.max}"
      :min-year="${x => x.minYear}"
      :max-year="${x => x.maxYear}"
      :disabled-week-days="${x => x.disabledWeekDays}"
      :disabled-dates="${x => x.disabledDates}"
      @change="${(x, c) => x.dateChanged(c.event as CustomEvent)}"
      ></ecos-calendar>
  </ecos-anchored-region>
</template>
`;