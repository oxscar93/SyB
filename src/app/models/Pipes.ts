import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'dateFormatPipe',
})
export class dateFormatPipe implements PipeTransform {
    transform(value: string) {
       var datePipe = new DatePipe("es");
        value = datePipe.transform(value, 'd MMM y');
        return value;
    }
}