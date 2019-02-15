import { Directive, TemplateRef } from '@angular/core';
import { DialogState } from '../models/dialog-state';

@Directive({
    selector: "[addPlato]"
  })
  export class PlatoDialogTemplateDirective {
    constructor(PlatoTemplate: TemplateRef<any>, state: DialogState) {
        state.templates["addPlato"] = PlatoTemplate;
    }
  }