interface IProduct{
    id:number;
    name:string;
    descripation:string;
    price:number; //declartion only in interface.
    display():void;
}
var objProduct: IProduct={
    id:123,
    name:"IPhone",
    descripation:"It is Awesome",
    price:60000// I have given implementation for Iproduct interface

}