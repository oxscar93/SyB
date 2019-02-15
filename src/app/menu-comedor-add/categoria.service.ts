import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Tip } from '../models/Tip';
import { HttpClient } from '@angular/common/http';
import { Categoria, MenuDate } from './categoria';

@Injectable({
  providedIn: 'root'
 })

export class CategoriaService {
  constructor(private http:HttpClient) { }

  base = environment.baseServiceUrl;

  addCategoria(categoria: Categoria) : Observable<any>{
    return this.addEntity("/add-categoria" ,
                           categoria);
  }

  getCategoriaList(comedorId: Number, menuDate: Date) : Observable<Array<Tip>>{
    return this.getEntity("/get-categoria-list/" + comedorId + "/" + menuDate,
                            this.extractCategoriaResponse);
  }

  getDiasComedorList(month: Number, year: Number, comedorId: Number) : Observable<Array<Tip>>{
    return this.getEntity("/get-dias-comedor-en-mes-list/" + month + "/" + year + "/" + comedorId,
                            this.extractDiasComedorResponse);
  }

  updateCategoria(categoria: Categoria) : Observable<any>{
    return this.updateEntity("/update-categoria/" + categoria.id, 
                             categoria);
  }

  delCategoria(categoriaId: number) : Observable<any>{
    return this.deleteEntity("/del-categoria" , categoriaId);
  }

  private addEntity(resource: string, body: any) : Observable<any> {
      return this.http.post(this.base + resource, body);
  }

  private updateEntity(resource: string, body: any) : Observable<any> {
    return this.http.put(this.base + resource, body);
  }

  private getEntity(resource: string, extractDataFunc: any) : Observable<any> {
    return this.http.get(this.base + resource)
       .pipe(map(extractDataFunc))
 }

 private deleteEntity(resource: string, id: number) : Observable<any> {
  return this.http.delete(this.base + resource + "/" + id);
}

  private extractDiasComedorResponse(res: any) {
    let result = [];

    res.forEach(element => {
        result.push(new MenuDate(element.menuDate));
    });

    return result;
  }

  private extractCategoriaResponse(res: any) {
    let result = [];

    res.forEach(element => {
        result.push(new Categoria(element.id, 
                    element.title, 
                    element.comedorId,
                    new Date(element.menuDate), 
                    element.imgUrl,
                    element.foodItems))
    });

    return result;
  }
}