function doubleMe(x: number); // function decleration
function doubleMe(y: string);
function doubleMe(arr: string[]);
function doubleMe(x: any) {
  if (x && typeof x === "number") {
    //condition checking number or not
    console.log(x * x);
  } else if (x && typeof x === "string") {
    //condtion checking string or not
    console.log(x + " " + x);
  } else if (Array.isArray(x)) {
    return x.map((name) => console.log(name + " " + name));
  }
}
doubleMe(2);
doubleMe("anushil"); //function calling
doubleMe(["Codemind","test"]);

var product=function(...num)
{
    var result=1;
    for (var i = 0; i < num.length; i++) {
 
        console.log(num[i]);
        result *=num[i];
 }
 return result;
}
console.log(product(2,3,4,5));
var hello=(name:string):string=>{
  return "hello"+" " + name;
}
console.log(hello("Angular batch 4"));
 
var multi=(num1:number,num2:number):number=>{
   return num1*num2;
}
console.log(multi(2,9));

