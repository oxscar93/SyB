export class Contacto{
    
    public phoneNumber:string;
    public sybUrl:string;
    public factory:string;
    public address: string;
    public location: string;
    public facebookUrl: string;
    public twitterUrl: string;
    public whatsAppUrl: string;
    public instagramUrl: string;
    public youTubeUrl: string;
    public id: number;
    
    constructor(id: number, phoneNumber: string, sybUrl: string, 
                address:string, location:string, twitterUrl: string, 
                facebookUrl: string, instagramUrl: string, youTubeUrl: string,
                whatsappUrl: string, factory: string) {

            this.id = id;
            this.phoneNumber = phoneNumber;
            this.sybUrl = sybUrl;
            this.address = address;
            this.location = location;
            this.facebookUrl = facebookUrl;
            this.twitterUrl = twitterUrl;
            this.instagramUrl = instagramUrl;
            this.youTubeUrl = youTubeUrl;
            this.whatsAppUrl = whatsappUrl;
            this.factory = factory;
        }
    }
    
    