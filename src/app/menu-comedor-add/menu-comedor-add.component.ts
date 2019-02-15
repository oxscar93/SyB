import { Component, OnInit } from '@angular/core';
import { CategoriaDialogService } from '../categoria-dialog/categoria-dialog.service';
import { Categoria, CategoriaAddResolver } from './categoria';
import { CategoriaService } from './categoria.service';
import { ExecutionHandlerService } from '../common-services/execution-handler.service';
import { ActivatedRoute } from '@angular/router';
import { PlatoDialogService } from '../plato-dialog/plato-dialog.service';
import { Plato } from './plato';

@Component({
  selector: 'app-menu-comedor-add',
  templateUrl: './menu-comedor-add.component.html',
  styleUrls: ['./menu-comedor-add.component.css']
})
export class MenuComedorAddComponent implements OnInit {

  constructor(private categoriaDialogService: CategoriaDialogService,
              private categoriaService: CategoriaService,
              private executionHandler: ExecutionHandlerService,
              private platoDialogService: PlatoDialogService,
              private route: ActivatedRoute) { }

  acoordionValues = [];
  categoriaList = [];
  comedorId: Number;
  imgUrl: string;
  menuDate: Date;

  ngOnInit() {
    this.setDefaultData();
  }

  setDefaultData(){
    this.route.data
    .subscribe((data: { initParams: CategoriaAddResolver }) => {
      this.comedorId = data.initParams.comedorId;
      this.imgUrl = data.initParams.comedorImgData.imgUrl;
    });

    this.setMenuDate();
    this.getList();
  }

  getCategoriaList(date: Date){
    this.menuDate = date;
    this.getList();
  }

  getList(){
    this.executionHandler.execute(
      ()=> {return this.categoriaService.getCategoriaList(this.comedorId, this.menuDate)},
      (result)=> {this.categoriaList = result})
  }

  addCategoria(){
    this.categoriaDialogService.addCategoria({title: "Nueva Categoría", message: "", obj: null})
    .then(result => {
       result.comedorId = this.comedorId;
       result.menuDate = this.menuDate;
    
       this.executionHandler.executeWithCallback(
                  ()=> {return this.categoriaService.addCategoria(result)},
                  () => {return this.categoriaService.getCategoriaList(this.comedorId, this.menuDate)},
                  (result) => {this.categoriaList = result})

    })
  }

  updateCategoria(categoria: Categoria){
    this.categoriaDialogService.addCategoria({title: "Modificar Categoría", message: "", obj: categoria})
    .then(result => {
      this.executionHandler.executeWithCallback(
        ()=> {return this.categoriaService.updateCategoria(result)},
        ()=> {return this.categoriaService.getCategoriaList(this.comedorId, this.menuDate)},
        (result) => {this.categoriaList = result})
    })
  }

  delCategoria(categoria: Categoria){
    this.executionHandler.executeWithConfirm(
      () => {return this.categoriaService.delCategoria(categoria.id)},
      () => {return this.categoriaService.getCategoriaList(this.comedorId, this.menuDate)},
      (result) => {this.categoriaList = result}, 
     'Confirmar borrado', 
     'Esta seguro de que desea borrar esta categoria?');
  }

  addPlato(categoria: Categoria){
    this.platoDialogService.addPlato({title: "Nuevo Plato", message: "", obj: null})
    .then(result => {
      result.categoriaId = categoria.id;
      categoria.foodItems.push(result);

      this.executionHandler.executeWithCallback(
                  ()=> {return this.categoriaService.updateCategoria(categoria)},
                  ()=> {return this.categoriaService.getCategoriaList(this.comedorId, this.menuDate)},
                  (result) => {this.categoriaList = result})

    })
  }

  updatePlato(categoria: Categoria, plato: Plato){
    this.platoDialogService.addPlato({title: "Modificar Plato", message: "", obj: plato})
    .then(result => {
      this.executionHandler.executeWithCallback(
                  ()=> {
                    categoria.foodItems.splice(categoria.foodItems.indexOf(plato),1);
                    categoria.foodItems.push(result);
                    return this.categoriaService.updateCategoria(categoria)
                   },
                  ()=> {return this.categoriaService.getCategoriaList(this.comedorId, this.menuDate)},
                  (result) => {this.categoriaList = result})

    })
  }

  delPlato(categoria: Categoria, plato: Plato){
    this.executionHandler.executeWithConfirm(
      () => 
      {
        categoria.foodItems.splice(categoria.foodItems.indexOf(plato),1);
        return this.categoriaService.updateCategoria(categoria)
      },
      () => {return this.categoriaService.getCategoriaList(this.comedorId, this.menuDate)},
      (result) => {this.categoriaList = result}, 
     'Confirmar borrado', 
     'Esta seguro de que desea borrar este plato?');
  }

  setMenuDate(){
    var now = new Date();
    this.menuDate = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()))
  }
}
