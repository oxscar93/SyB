import { Directive, TemplateRef } from '@angular/core';
import { DialogState } from '../models/dialog-state';

@Directive({
    selector: "[addComedor]"
  })
  export class ComedorDialogTemplateDirective {
    constructor(ComedorTemplate: TemplateRef<any>, state: DialogState) {
        state.templates["addComedor"] = ComedorTemplate;
    }
  }