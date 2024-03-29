import { Injectable } from '@angular/core';
import { toDate, format as formatJalali } from 'date-fns-jalali';
import { enUS } from 'date-fns/locale';
import { eventTypeList } from 'src/app/shared/models/event-type-list';

@Injectable({
  providedIn: 'root',
})
export class ChangeService {
  public getTranslateEvent(name: string) {
    return eventTypeList.find((item: any) => {
      return item.name === name;
    })?.translateName;
  }
  formatDateToPersian(dateString: string[]) {
    const persianDigits = {
      '0': '۰',
      '1': '۱',
      '2': '۲',
      '3': '۳',
      '4': '۴',
      '5': '۵',
      '6': '۶',
      '7': '۷',
      '8': '۸',
      '9': '۹',
    };

    let formattedDate = dateString;
    for (const digit in persianDigits) {
      formattedDate[0] = formattedDate[0].replace(
        new RegExp(digit, 'g'),
        persianDigits[digit as keyof typeof persianDigits]
      );
    }
    for (const digit in persianDigits) {
      formattedDate[1] = formattedDate[1].replace(
        new RegExp(digit, 'g'),
        persianDigits[digit as keyof typeof persianDigits]
      );
    }

    return formattedDate;
  }
  public changeJalaiDate(data: string) {
    const date = new Date(data);

    if (isNaN(date.getTime())) {
      // console.error("Invalid date object.");
      return '';
    }
    const jalaliDateWithTime = formatJalali(date, 'yyyy/MM/dd HH:mm:ss', {
      locale: enUS,
    });
    const time = jalaliDateWithTime.split(' ');
    return this.formatDateToPersian(time);
  }
  formatPriceToPersian(dateString:string) {
    const persianDigits = {
      '0': '۰',
      '1': '۱',
      '2': '۲',
      '3': '۳',
      '4': '۴',
      '5': '۵',
      '6': '۶',
      '7': '۷',
      '8': '۸',
      '9': '۹'
    };
    
    let formattedDate = (Math.trunc(+dateString).toString());
    for (const digit in persianDigits) {
      formattedDate = formattedDate.replace(new RegExp(digit, 'g'), persianDigits[digit as keyof typeof persianDigits]);
    }
    
    return formattedDate;
  }
}
