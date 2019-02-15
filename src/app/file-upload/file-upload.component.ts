import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  fileUploaded: any;
  uploader: FileUploader = new FileUploader({itemAlias: 'photo'});

  @Input('customFileUrl') customFileUrl: string;
  @Output() imageEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.setDefaultData();
  }

  setDefaultData(){
    this.fileUploaded = this.customFileUrl;
    
    this.uploader.onAfterAddingFile = (file) => { 
      this.fileUploaded = file._file 
      this.imageEmitter.emit(this.fileUploaded);
    };
  }

  getImgUrl(){
    if (this.customFileUrl){
      return 'none';
    }

    if (this.fileUploaded){
      return 'none';
    }
    else{
      return 'url(../../assets/images/CuadroCarga.png)'
    }
  }
}
