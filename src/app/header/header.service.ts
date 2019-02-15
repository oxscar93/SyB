import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
 })

export class HeaderService {
  weekDayList = ["-", "Lunes","Martes","Miercóles","Jueves","Viernes","Sábado","Domingo"];  
  monthList = ["-","Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  constructor() { }

  getWeekDayName(index: number){
    return this.weekDayList[index];
  }

  getMonthName(index: number){
    return this.monthList[index];
  }
  
}