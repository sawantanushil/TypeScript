interface IFlight{
    flightNo:number;
    from:string;
    to:string;
}
class Flight implements IFlight{
    flightNo: number;
    from:string;
    to:string;

constructor(flightNo:number, from:string, to:string){
    this.flightNo= flightNo;
    this.from=from;
    this.to=to;
}
}

var objflight=new Flight(123,"Mumbai","Pune");
console.log(objflight);

interface Car{
    wheel:number;
    color:string;
    Seats:number;
}
class myCar1 implements Car{
    wheel:number;
    color:string;
    Seats:number;
    constructor(wheel:number,color:string,Seats:number){
        this.wheel=wheel;
        this.color=color;
        this.Seats=Seats;
    }
}
var objcar=new myCar1(4,"Red",5);
console.log(objcar);


