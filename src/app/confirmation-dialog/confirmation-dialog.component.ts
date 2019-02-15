import { Component, OnChanges } from '@angular/core';
import {DialogState } from '../models/dialog-state';
import { IDialogOptions } from '../models/dialog-options';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {

  options: IDialogOptions;

  constructor(private state: DialogState) {
    this.options = state.options;
  }

  onOk() {
    this.state.modal.close('confirmed');
  }

  onCancel() {
    this.state.modal.dismiss('not confirmed');
  }
}
