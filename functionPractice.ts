function doubleMe1(x:number);// function decliration
function doubleMe1(x:string);// function decliration

function doubleMe1(x:any) // function emplematation
{
   if(x && typeof x === "number"){   
          var result=x*2;
          console.log(result);
          
   }else if(x && typeof x==="string"){

    console.log(x + " " +x );
    
   }
}
doubleMe1(5);  //function call
doubleMe1("anushil");