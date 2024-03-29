import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'datecustom',
  pure: false
})
export class DatecustomPipe
  implements PipeTransform {
  constructor(private translateService: TranslateService, private datePipe: DatePipe) { }

  transform(value: any, pattern: string = 'mediumDate'): any {
    return this.datePipe.transform(value, pattern, undefined, this.translateService.currentLang);
  }
}

