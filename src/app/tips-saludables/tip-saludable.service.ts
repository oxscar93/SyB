import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Tip } from '../models/Tip';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
 })

export class TipSaludableService {
  constructor(private http:HttpClient) { }

  base = environment.baseServiceUrl;
  
  addTip(tip: Tip, image: any) : Observable<any>{
    var formData =  this.getItemFormData(tip, image);
    return this.addEntity("/add-tip-saludable" ,
                           formData, 
                           this.extractResponse);
  }

  updateTip(tip: Tip, image: any) : Observable<any>{
    var formData =  this.getItemFormData(tip, image);
    return this.updateEntity("/update-tip-saludable/" + tip.id, 
                             formData);
  }

  updateTipNoImage(tip: Tip) : Observable<any>{
    return this.updateEntity("/update-tip-saludable-no-image/" + tip.id, 
                             tip);
  }

  getTipList() : Observable<Array<Tip>>{
    return this.getEntity("/get-tip-saludable-list/",
                            this.extractResponse);
  }

  delTip(tipId: number) : Observable<any>{
    return this.deleteEntity("/del-tip-saludable" , tipId, 
                           this.extractResponse);
  }

  private getItemFormData(tip: Tip, image: any){
    var formData: FormData = new FormData();
    formData.append('title', tip.title.toString());
    formData.append('description', tip.description);
    formData.append('image', image);
 
    return formData;
  }

  private addEntity(resource: string, body: any, extractDataFunc: any) : Observable<any> {
      return this.http.post(this.base + resource, body);
  }

  private updateEntity(resource: string, body: any) : Observable<any> {
    return this.http.put(this.base + resource, body);
   
}

  private getEntity(resource: string, extractDataFunc: any) : Observable<any> {
    return this.http.get(this.base + resource)
       .pipe(map(extractDataFunc))
 }

 private deleteEntity(resource: string, id: number, extractDataFunc: any) : Observable<any> {
    return this.http.delete(this.base + resource + "/" + id);
}

  private extractResponse(res: any) {
    let result = [];

    res.forEach(element => {
        result.push(new Tip(element.id, element.description, new Date(element.createdAt), element.title, element.imgUrl))
    });

    return result;
  }
}