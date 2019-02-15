import { ComedorImg } from "../models/Comedor";
import { Plato } from "./plato";

export class Categoria{
    
    public title:string;
    public comedorId: number;
    public id:number;
    public menuDate: Date;
    public imgUrl: string;
    public foodItems : Plato[]

    constructor(id: number, title: string, comedorId: number, menuDate: Date, imgUrl: string, foodItems: Plato[]) {
            this.id = id;
            this.title = title;
            this.menuDate = menuDate;
            this.comedorId = comedorId
            this.imgUrl = imgUrl; 
            this.foodItems = foodItems;        
        }
}

export class MenuDate{
    
    public menuDate:string;

    constructor(menuDate:string) {
            this.menuDate = menuDate;
    }

    public getMonth(){
        var val = this.menuDate.split("-", 3)[1];
        return new Number(val);
    }

    public getDay(){
        var val = this.menuDate.split("-", 3)[2];
        return new Number(val);
    }
}

export class CategoriaAddResolver{
    
    public comedorImgData:ComedorImg;
    public comedorId: number;

    constructor(comedorId: number, comedorImgData: ComedorImg) {
            this.comedorId = comedorId;
            this.comedorImgData = comedorImgData;
        }
}
    
    