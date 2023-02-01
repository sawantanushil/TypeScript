var sn;
sn = "Codemind";
sn = 1235;
function formatCommandLine(input) {
    var line = "";
    if (typeof input === "string") {
        line = input.trim();
    }
    else {
        line = input.map(function (x) { return x.trim(); }).join("");
    }
    return line;
}
console.log(formatCommandLine(" Hello "));
console.log(formatCommandLine([" Hello", " Anushil"]));
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person1;
}());
var obj1 = new Person1("Anushil", 31);
console.log(obj1.name, obj1.age);
var Person2 = /** @class */ (function () {
    //parametrised costrocutor
    function Person2(fname, age) {
        this.fname = fname;
        this.age = age;
    }
    return Person2;
}());
var obj2 = new Person2("jack", 31);
console.log(obj2.fname, obj2.age);
