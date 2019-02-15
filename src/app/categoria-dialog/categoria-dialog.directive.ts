import { Directive, TemplateRef } from '@angular/core';
import { DialogState } from '../models/dialog-state';

@Directive({
    selector: "[addCategoria]"
  })
  export class CategoriaDialogTemplateDirective {
    constructor(CategoriaTemplata: TemplateRef<any>, state: DialogState) {
        state.templates["addCategoria"] = CategoriaTemplata;
    }
  }