import { Component, OnInit } from '@angular/core';
import { DialogState } from '../models/dialog-state';
import { IDialogOptions } from '../models/dialog-options';
import { Plato } from '../menu-comedor-add/plato';

@Component({
  selector: 'app-plato-dialog',
  templateUrl: './plato-dialog.component.html',
  styleUrls: ['./plato-dialog.component.css']
})
export class PlatoDialogComponent implements OnInit {

  plato: Plato;
  image: any;
  options: IDialogOptions;

  ngOnInit() {    
    this.setDefaultData();
  }

  constructor(private state: DialogState) {
    this.options = state.options;
  }

  setDefaultData(){
    if (this.options.obj != null){
      this.plato = Object.assign({}, this.options.obj);
    }else{
      this.plato= new Plato(0, null, null, null);
    }
  }

  getImg(img){
    this.image = img;
  }

  onOk(valid) { 
    if (valid){
      this.state.modal.close(this.plato);
    }
  }

  onCancel() {
    this.state.modal.dismiss('cancel');
  }
}
