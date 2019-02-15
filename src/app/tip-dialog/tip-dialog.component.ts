import { Component, OnInit } from '@angular/core';
import { DialogState } from '../models/dialog-state';
import { Tip } from '../models/Tip';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { IDialogOptions } from '../models/dialog-options';

@Component({
  selector: 'app-tip-dialog',
  templateUrl: './tip-dialog.component.html',
  styleUrls: ['./tip-dialog.component.css']
})
export class TipDialogComponent implements OnInit {

  tip: Tip;
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
      this.tip = Object.assign({}, this.options.obj);
    }else{
      this.tip= new Tip(0, null, new Date(Date.now()), null, null);
    }
  }

  getImg(img){
    this.image = img;
  }

  onOk(valid) { 
    if (valid && this.image || this.tip.imageUrl){
      this.state.modal.close({image: this.image, tip: this.tip});
    }
  }

  onCancel() {
    this.state.modal.dismiss('cancel');
  }
}
