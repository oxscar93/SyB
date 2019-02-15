import { Injectable } from '@angular/core';
import {  BlockUI, NgBlockUI } from 'ng-block-ui';

import { ConfirmService } from '../confirmation-dialog/confirm.service';
import { ToasterService } from 'angular2-toaster';


@Injectable()
export class ExecutionHandlerService {
  constructor(private confirmService: ConfirmService, private toasterService: ToasterService) { }

  @BlockUI() blockUI: NgBlockUI;

  executeWithCallback(func: any, secondFunc: any, lastFunc : any, errorFunc? : any){
    this.blockUI.start();
     func().subscribe(() => {
       secondFunc().subscribe(result => {
         lastFunc(result);
         this.blockUI.stop();
       }, );
     },
  );
  }

  execute(func: any, lastFunc: any, errorFunc? : any){
    this.blockUI.start();
     func().subscribe(result => {    
         lastFunc(result)
         this.blockUI.stop();
      });
  }

executeWithSuccessMsg(func: any, lastFunc: any, msg: string, errorFunc? : any){
    this.blockUI.start();
     func().subscribe(result => {    
         lastFunc(result)
         this.blockUI.stop();
         this.toasterService.pop("success", "", msg);
      });
  }

  executeWithConfirm(func: any, secondFunc: any, lastFunc : any, titleConfirm: string, msg: string, cancelationFunc? : any,){

    this.confirmService.confirm(
      { title: titleConfirm, 
       message: msg,
       obj: null }).then(
        () => {
            this.blockUI.start();
            func().subscribe(() => {
              secondFunc().subscribe(result => {
                lastFunc(result);
                this.blockUI.stop();
              });
            });
        },
        () => {
          if (cancelationFunc){
             cancelationFunc();
          }
        });
   
  }

  executeWithConfirmNoCallback(func: any, lastFunc : any, titleConfirm: string, msg: string, cancelationFunc? : any,){

    this.confirmService.confirm(
      { title: titleConfirm, 
       message: msg,
       obj: null }).then(
        () => {
            this.blockUI.start();
            func().subscribe(() => {
                lastFunc();
                this.blockUI.stop();
            });
        },
        () => {
          if (cancelationFunc){
             cancelationFunc();
          }
        });
   
  } 
}