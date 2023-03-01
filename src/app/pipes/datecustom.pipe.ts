import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'datecustom'
})
export class DatecustomPipe extends
  DatePipe implements PipeTransform {
  override transform(value: any, args?: any): any {
    return super.transform(value, "EEEE d MMMM y h:mm a");
  }
}
