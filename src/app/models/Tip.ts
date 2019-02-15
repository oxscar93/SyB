export class Tip{
    
public description:string;
public fecha:Date;
public title:string;
public id: number;
public imageUrl: string;

constructor(id: number, descripcion: string, fecha: Date, title:string, imageUrl: string) {
        this.id = id;
        this.description = descripcion;
        this.fecha = fecha;
        this.title = title;
        this.imageUrl = imageUrl
    }
}

