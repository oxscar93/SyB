import { Component, OnInit } from '@angular/core';
import { DialogState } from '../models/dialog-state';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { IDialogOptions } from '../models/dialog-options';
import { Comedor } from '../models/Comedor';

@Component({
  selector: 'app-comedor-dialog',
  templateUrl: './comedor-dialog.component.html',
  styleUrls: ['./comedor-dialog.component.css']
})
export class ComedorDialogComponent implements OnInit {

  comedor: Comedor;
  image: any;
  options: IDialogOptions;
  repeatedPassword: string;

  ngOnInit() {    
    this.setDefaultData();
  }

  constructor(private state: DialogState) {
    this.options = state.options;
  }

  setDefaultData(){
    if (this.options.obj != null){
      this.comedor = Object.assign({}, this.options.obj);
      this.repeatedPassword = this.comedor.password;
    }else{
      this.comedor= new Comedor(0, null, null, null, null, 0);
    }
  }

  getImg(img){
    this.image = img;
  }

  onOk(valid) { 
    if ((valid && this.image || this.comedor.imageUrl) 
        && this.comedor.password == this.repeatedPassword){
      this.state.modal.close({image: this.image, comedor: this.comedor});
    }
  }

  onCancel() {
    this.state.modal.dismiss('cancel');
  }
}
