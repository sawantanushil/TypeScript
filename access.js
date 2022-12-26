var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this.userName;
        },
        set: function (name) {
            this.userName = name;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.dispaly = function () {
        console.log(this.userName);
    };
    return Student;
}());
var objstudent = new Student();
objstudent.name = "Codemind";
console.log(objstudent.name);
