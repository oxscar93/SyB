import { Directive, TemplateRef } from '@angular/core';
import { DialogState } from '../models/dialog-state';

@Directive({
    selector: "[addTip]"
  })
  export class TipDialogTemplateDirective {
    constructor(TipTemplate: TemplateRef<any>, state: DialogState) {
        state.templates["addTip"] = TipTemplate;
    }
  }