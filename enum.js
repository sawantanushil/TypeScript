var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
})(gender || (gender = {}));
console.log(gender.male);
console.log(gender.female);
console.log(gender[0]);
console.log(gender[1]);
var WeekEnds;
(function (WeekEnds) {
    WeekEnds[WeekEnds["Saturday"] = 6] = "Saturday";
    WeekEnds[WeekEnds["Sunday"] = 7] = "Sunday";
})(WeekEnds || (WeekEnds = {}));
console.log(WeekEnds[6]);
console.log(WeekEnds[7]);
