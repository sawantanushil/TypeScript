var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        Check.bankname = "BOB";
        console.log(Check.bankname);
    };
    return Check;
}());
var objcheck = new Check();
objcheck.display();
