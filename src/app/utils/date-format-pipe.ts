import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({name: 'CustomDateFormat'})
export class CustomDateFormat implements PipeTransform {
  transform(date: string): string {
    if(date){
      return moment(date).format("DD MMMM YYYY");
    }
  }
}