interface IProduct{
    id:number;
    name:string;
    description?:string;//optinal is indicated by ? symbol
    price:number;//decleartion only in interface.
    display():void;
}
var objproduct:IProduct={
     id:123,
     name:"IPhone",
     //description:"its awesome",
     price:120000,//i have given impelemation for IProduct iterface.
     display():void{
        console.log(this.id+" "+ this.name+""+this.description+""+this.price);
        
     }
}