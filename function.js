function doubleMe(x) {
    if (x && typeof x === "number") {
        //condition checking number or not
        console.log(x * x);
    }
    else if (x && typeof x === "string") {
        //condtion checking string or not
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) {
        return x.map(function (name) { return console.log(name + " " + name); });
    }
}
doubleMe(2);
doubleMe("anushil"); //function calling
doubleMe(["Codemind", "test"]);
var product = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var result = 1;
    for (var i = 0; i < num.length; i++) {
        console.log(num[i]);
        result *= num[i];
    }
    return result;
};
console.log(product(2, 3, 4, 5));
var hello = function (name) {
    return "hello" + " " + name;
};
console.log(hello("Angular batch 4"));
