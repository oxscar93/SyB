import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Contacto } from './contacto';

@Injectable({
  providedIn: 'root'
 })
export class ContactoService {
  constructor(private http:HttpClient) { }

  base = environment.baseServiceUrl;

  getContactoInfo() : Observable<any>{
    return this.getEntity("/get-contact-info",
                           this.extractResponse);
  }

  updateContactInfo(contact: Contacto) : Observable<any>{
    return this.updateEntity("/update-contact-info/" + contact.id, 
                            contact);
  }

  private updateEntity(resource: string, body: any) : Observable<any> {
    return this.http.put(this.base + resource, body);
  }

  private getEntity(resource: string, extractDataFunc: any) : Observable<any> {
    return this.http.get(this.base + resource)
       .pipe(map(extractDataFunc))
 }

  private extractResponse(res: any) {
    return new Contacto(res.id, 
                        res.phoneNumber, 
                        res.sybUrl, 
                        res.address, 
                        res.location, 
                        res.twitterUrl,
                        res.facebookUrl, 
                        res.instagramUrl, 
                        res.youTubeUrl,
                        res.whatsAppUrl,
                        res.factory);
  }
}