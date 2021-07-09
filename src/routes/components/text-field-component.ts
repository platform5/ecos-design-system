import { startOfWeek, startOfMonth, format } from 'date-fns';

export class TextFieldComponent {

  public displayCalendar = false;

  public openCalendar(): void {
    console.log('open calendar');
    this.displayCalendar = true;
    this.generateDays();
  }

  public closeCalendar(): void {
    console.log('close calendar');
    this.displayCalendar = false;
  }

  public keyDown(event: KeyboardEvent): void {
    console.log('keydown', event);
  }

  public weeks: Week[] = []
  public generateDays(date?: Date): void {
    console.log('generateDays');
    const source = date || new Date();
    const month = source.getMonth();
    const start = startOfWeek(startOfMonth(source));

    const current = new Date(start);
    const weeks: Week[] = [[]];
    let weekIndex = 0;
    let dayIndex = 0;

    while ( weekIndex < 10) {
      if (dayIndex === 7) {
        if (current.getMonth() !== month) {
          break;
        }
        dayIndex = 0;
        weekIndex += 1;
        weeks.push([]);
      }
      weeks[weekIndex].push({
        number: current.getDate(),
        date: new Date(current),
        current: current.getMonth() === month
      });
      current.setDate(current.getDate() + 1);
      dayIndex++;
    }

    console.log('weeks', weeks);

  }

}

interface Day {
  number: number;
  date: Date;
  current: boolean;
}

type Week = Day[];