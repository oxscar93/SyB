import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComedorDialogService } from '../comedor-dialog/comedor-dialog.service';
import { ActivatedRoute } from '@angular/router';
import { ExecutionHandlerService } from '../common-services/execution-handler.service';
import { ComedorService } from '../comedor/comedor.service';
import { Comedor } from '../models/Comedor';


@Component({
  selector: 'app-comedor',
  templateUrl: './comedor.component.html',
  styleUrls: ['./comedor.component.css']
})
export class ComedorComponent implements OnInit {

  comedorList:Comedor[];

  constructor(
    private route: ActivatedRoute,
    private comedorDialogService: ComedorDialogService, 
    private execHandler: ExecutionHandlerService,
    private comedorService: ComedorService){

  }

  ngOnInit() {
    this.setDefaultData();

  }

  setDefaultData(){
    this.route.data
    .subscribe((data: { comedorList: Array<Comedor> }) => {
      this.comedorList = data.comedorList
    });
  }
  
  addComedor(){
    this.comedorDialogService.addComedor({title: "Nuevo Comedor", message: "", obj: null})
    .then(result => {
      this.comedorList.push(result.comedor);
         this.execHandler.executeWithCallback(
                               () => {return this.comedorService.addComedor(result.comedor, result.image)}, 
                               () => {return this.comedorService.getComedorList()},
                               (result) => {this.comedorList = result})
    })
  }

  updateComedor(comedor: Comedor){
    this.comedorDialogService.addComedor({title: "Modificar Comedor", message: "", obj: comedor})
    .then(result => {
            this.execHandler.executeWithCallback(
                              () => {return result.image ? 
                                      this.comedorService.updateComedor(result.comedor, result.image) : 
                                      this.comedorService.updateComedorNoImage(result.comedor)},
                               () => {return this.comedorService.getComedorList()},
                               (result) => {this.comedorList = result}) 
    })
  }

  delComedor(comedor: Comedor){
    this.execHandler.executeWithConfirm(
      () => {return  this.comedorService.delComedor(comedor.id)},
      () => {return this.comedorService.getComedorList()},
      (result) => {this.comedorList = result}, 
     'Confirmar borrado', 
     'Esta seguro de que desea borrar este comedor?');
  }
}
