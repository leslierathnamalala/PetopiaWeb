import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({name: 'CustomDateTimeFormat'})
export class CustomDateTimeFormat implements PipeTransform {
  transform(date: string): string {
    if(date){
      return moment(date).format("DD MMMM YYYY h:mm:ss a");
    }
  }
}