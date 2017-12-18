import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salesFormat'
})
export class SalesFormatPipe implements PipeTransform {

  transform(value: number, args?: string): string {
    let S = 's', M = 'm', H = 'h', pre = '';
    const MS = 1000, SEC = 1 * MS, MIN = 60 * SEC, HR = 60 * MIN;

    if (args === 'long') {
      pre = '~';
      S = ' seconds';
      M = ' minutes';
      H = ' hours';
    }

    return pre + (value < MIN ? Math.round(value / MS) + S :
                 value < HR ? Math.round(value / MIN) + M :
                 Math.round(value / HR) + H);
  }
}
