import { Component, OnInit } from '@angular/core';
import { IDialogOptions } from '../models/dialog-options';
import { DialogState } from '../models/dialog-state';
import { Categoria } from '../menu-comedor-add/categoria';

@Component({
  selector: 'app-categoria-dialog',
  templateUrl: './categoria-dialog.component.html',
  styleUrls: ['./categoria-dialog.component.css']
})
export class CategoriaDialogComponent implements OnInit {

  categoria: Categoria;
  options: IDialogOptions;

  ngOnInit() {    
    this.setDefaultData();
  }

  constructor(private state: DialogState) {
    this.options = state.options;
  }

  setDefaultData(){
    if (this.options.obj != null){
      this.categoria = Object.assign({}, this.options.obj);
    }else{
      this.categoria= new Categoria(0, null, null, null, null, []);
    }
  }
  
  onOk(valid) { 
    if (valid) 
    {
      this.state.modal.close(this.categoria);
    }
  }

  onCancel() {
    this.state.modal.dismiss('cancel');
  }

}
