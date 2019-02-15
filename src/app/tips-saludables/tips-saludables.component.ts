import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { dateFormatPipe } from '../models/Pipes';
import { Tip } from '../models/Tip';
import { TipDialogService } from '../tip-dialog/tip-dialog.service';
import { ActivatedRoute } from '@angular/router';
import { TipSaludableService } from './tip-saludable.service';
import { ExecutionHandlerService } from '../common-services/execution-handler.service';

@Component({
  selector: 'app-tips-saludables',
  templateUrl: './tips-saludables.component.html',
  styleUrls: ['./tips-saludables.component.css']
})
export class TipsSaludablesComponent implements OnInit {

  dateFormatPipeFilter = new dateFormatPipe();
  tipList:Tip[] = [];

  constructor(private route: ActivatedRoute, 
              private tipDialogService: TipDialogService, 
              private execHandler: ExecutionHandlerService,
              private tipService: TipSaludableService){

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
