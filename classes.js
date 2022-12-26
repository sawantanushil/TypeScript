var Flight = /** @class */ (function () {
    function Flight(flightNo, from, to) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }
    return Flight;
}());
var objflight = new Flight(123, "Mumbai", "Pune");
console.log(objflight);
var myCar1 = /** @class */ (function () {
    function myCar1(wheel, color, Seats) {
        this.wheel = wheel;
        this.color = color;
        this.Seats = Seats;
    }
    return myCar1;
}());
var objcar = new myCar1(4, "Red", 5);
console.log(objcar);
