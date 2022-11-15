import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';
@Pipe({
  name: 'filter'
})

@Injectable()

export class MyFilterPipe implements PipeTransform {
  transform(items: any[], filter: string,value:any): any{
    if (!items || !filter) {
      return items;
    } else {
      
      return  items.filter((item: any) => item[filter] == value);
    }
  }
}


