import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Comedor, ComedorImg } from '../models/Comedor';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
 })

export class ComedorService {
  
  constructor(private http:HttpClient) { }

  base = environment.baseServiceUrl;
  
  getComedorList() : Observable<Array<Comedor>>{
    return this.getEntity("/get-comedor-list/",
                            this.extractResponse);
  }

  getComedorImage(comedorId: Number) : Observable<ComedorImg>{
    return this.getEntity("/get-comedor-image/" + comedorId,
                            this.extractComedorImageResponse);
  }


  addComedor(comedor: Comedor, image: any) : Observable<any>{
    var formData =  this.getItemFormData(comedor, image);
    return this.addEntity("/add-comedor" ,
                           formData, 
                           this.extractResponse);
  }

  updateComedor(comedor: Comedor, image: any) : Observable<any>{
    var formData =  this.getItemFormData(comedor, image);
    return this.updateEntity("/update-comedor/" + comedor.id, 
                             formData);
  }

  updateComedorNoImage(comedor: Comedor) : Observable<any>{
    return this.updateEntity("/update-comedor-no-image/" + comedor.id, 
                             comedor);
  }

  delComedor(comedorId: number) : Observable<any>{
    return this.deleteEntity("/del-comedor" , comedorId, 
                           this.extractResponse);
  }

  private getItemFormData(comedor: Comedor, image: any){
    var formData: FormData = new FormData();
    formData.append('title', comedor.title);
    formData.append('user', comedor.user);
    formData.append('password', comedor.password);
    formData.append('image', image);
    formData.append('userId', comedor.userId.toString());

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
        result.push(new Comedor(element.id, element.title, element.user, element.password, element.imgUrl, element.userId))
    });

    return result;
  }

  private extractComedorImageResponse(res: any) {
    return new ComedorImg(res.imgUrl);
  }
}