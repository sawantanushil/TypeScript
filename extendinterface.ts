interface IExterior{
    color:string;
    numofDoors:number;
}
interface IInterior{
    seats:number;
    auto:boolean;
}
interface Icar extends IExterior,IInterior{
    make:string;
    model:string;
    year:number;
}
var myCar :Icar={
    make:"TATA",
    model:"Altroz",
    year:2022
}