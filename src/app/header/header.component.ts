import {
  Component,
  ViewChild,
  OnInit,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { CategoriaService } from '../menu-comedor-add/categoria.service';
import { ExecutionHandlerService } from '../common-services/execution-handler.service';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  model: NgbDateStruct;
  dayList = [];
  date: {year: number, month: number};
  currentDayString : string; 
  currentMonthString : string;
  isFirstTime = true;

  @Input('comedorId') comedorId: Number;
  @Input('comedorImg') comedorImg: string;
  @Output() dateChanged = new EventEmitter();
  
  constructor(private calendar: NgbCalendar, 
              private categoriaService: CategoriaService,
              private execHandler: ExecutionHandlerService,
              private router: Router,
              private headerService: HeaderService){

  }

  ngOnInit() {
   this.setDefaultData();
  }

  setDefaultData(){
    this.model = this.calendar.getToday();
    this.execHandler.execute(()=> 
                  {return this.categoriaService.getDiasComedorList(this.model.month, this.model.year, this.comedorId)},
                  (result)=> {this.model = this.calendar.getToday(); 
                              this.dayList = result
                              this.getDayMonthStringInfo(this.model);
                            });
  }

  isSelected(date: NgbDate){
    return this.dayList.find(d => d.getDay() == date.day && d.getMonth()== date.month);
  }  

  navigateMonth(date: NgbDate){
    if (!this.isFirstTime){
      this.model = date;
      this.model.day= 1;
      this.execHandler.execute(()=> 
      {return this.categoriaService.getDiasComedorList(this.model.month,
                                                       this.model.year, 
                                                       this.comedorId)},
      (result)=> {
                  this.dayList = result
                }); 
    }
    
    this.isFirstTime = false;
    this.getDayMonthStringInfo(this.model);
  }

  changeDate(date: NgbDate){
    this.model = date;
    this.getDayMonthStringInfo(date);
    this.dateChanged.emit(new Date(Date.UTC(this.model.year, this.model.month - 1, this.model.day)));
  }

  getDayMonthStringInfo(date: any){
    this.currentDayString = this.headerService.getWeekDayName(this.calendar.getWeekday(date));
    this.currentMonthString = this.headerService.getMonthName(date.month);
  }

  back(){
      this.router.navigate(["/home/menu-comedor-list"])
  }
}