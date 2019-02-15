import { Directive, TemplateRef } from '@angular/core';
import { DialogState } from '../models/dialog-state';

@Directive({
    selector: "[confirm]"
  })
  export class ConfirmTemplateDirective {
    constructor(confirmTemplate: TemplateRef<any>, state: DialogState) {
      state.templates["confirm"] = confirmTemplate;
    }
  }