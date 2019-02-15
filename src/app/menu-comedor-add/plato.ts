export class Plato{
    
    public id: number;
    public title: string;
    public description: string;
    public categoriaId: string;

    constructor(id: number, title: string, description: string, categoriaId: string) {
        this.id = id;
        this.title = title;
        this.description= description;
        this.categoriaId = categoriaId
    }
}