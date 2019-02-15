import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contacto } from './contacto';
import { ContactoService } from './contacto.service';
import { ExecutionHandlerService } from '../common-services/execution-handler.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contacto: Contacto;

  constructor(private route: ActivatedRoute, 
              private contactoService: ContactoService,
              private execHandler: ExecutionHandlerService) { }

  ngOnInit() {
    this.setDefaultData();
  }

  setDefaultData(){
    this.route.data
    .subscribe((data: { contacto: Contacto }) => {
      this.contacto = data.contacto
    });
  }

  update(){
    this.execHandler.executeWithSuccessMsg(
      () => {return this.contactoService.updateContactInfo(this.contacto)}, 
      () => {},
      "La información de contacto se ha actualizado con éxito");
  }
}
