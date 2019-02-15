export class Comedor{
    
    public title:string;
    public user:string;
    public password:string;
    public imageUrl: string;
    public id:number;
    public userId: number;
    
    constructor(id: number, title: string, user: string, password:string, imageUrl: string, userId:number) {
            this.id = id;
            this.title = title;
            this.user = user;
            this.password = password;
            this.imageUrl = imageUrl;
            this.userId = userId;
        }
    }

export class ComedorImg{

    public imgUrl: string;

    constructor(imgUrl: string) {
            this.imgUrl = imgUrl;
        }
}
        
    
    