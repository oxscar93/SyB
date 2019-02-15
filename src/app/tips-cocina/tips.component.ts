import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Tip } from '../models/Tip';
import { dateFormatPipe } from '../models/Pipes';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TipDialogService } from '../tip-dialog/tip-dialog.service';
import { ActivatedRoute } from '@angular/router';
import { ExecutionHandlerService } from '../common-services/execution-handler.service';
import { TipCocinaService } from './tip-cocina.service';
import { defaultIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})

export class TipsComponent implements OnInit {
  
  dateFormatPipeFilter = new dateFormatPipe();
  tipList:Tip[] = [];

  constructor(
    private route: ActivatedRoute,
    private tipDialogService: TipDialogService, 
    private execHandler: ExecutionHandlerService,
    private tipService: TipCocinaService){

  }

  ngOnInit() {
    this.setDefaultData();
  }

  setDefaultData(){
    this.route.data
    .subscribe((data: { tipList: Array<Tip> }) => {
      this.tipList = data.tipList
    });
  }

  addTip(){
    this.tipDialogService.addTip({title: "Nuevo Tip", message: "", obj: null})
    .then(result => {
      this.execHandler.executeWithCallback(
                               () => {return this.tipService.addTip(result.tip, result.image)}, 
                               () => {return this.tipService.getTipList()},
                               (result) => {this.tipList = result}) 
    })
  }

  updateTip(tip: Tip){
    this.tipDialogService.addTip({title: "Modificar Tip", message: "", obj: tip})
    .then(result => {
      this.execHandler.executeWithCallback(
                               () => {return result.image ? 
                                      this.tipService.updateTip(result.tip, result.image) 
                                    : this.tipService.updateTipNoImage(result.tip)}, 
                               () => {return this.tipService.getTipList()},
                               (result) => {this.tipList = result}) 
    })
  }

  delTip(tip: Tip){
    this.execHandler.executeWithConfirm(
      () => {return  this.tipService.delTip(tip.id)},
      () => {return this.tipService.getTipList()},
      (result) => {this.tipList = result}, 
     'Confirmar borrado', 
     'Esta seguro de que desea borrar este tip?');
  }
}
