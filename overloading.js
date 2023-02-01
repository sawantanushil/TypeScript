function doubleMe1(x) {
    if (x && typeof x === 'number') {
        console.log(x * 2);
    }
    else if (x && typeof x === 'string') {
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) {
        return x.map(function (name) { return console.log(name); });
    }
}
doubleMe1(4);
doubleMe1("Anushil");
doubleMe1(['a']);
