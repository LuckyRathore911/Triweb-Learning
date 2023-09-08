//node "Control Flow.js" command to run program

//node ControlFlow.js  when filename doesn't have any space

//Block Statements
if(true)
{
    let x=5;
    console.log(x);
}

//Conditional Statements
let a=3,b=5;
if(a>b)
     console.log(a-b);
else console.log(a+b);

//Falsy values
if(false)
     console.log("In if 1"); // control never reaches here
else console.log("In else 1");

//undefined
let x;
if(x)
     console.log("In if 2");// control never reaches here
else console.log("In else 2");

//null
if(null)
     console.log("In if 3");// control never reaches here
else console.log("In else 3");

//0
if(0)
     console.log("In if 4");// control never reaches here
else console.log("In else 4");

//NaN
if(NaN)
     console.log("In if 5");// control never reaches here
else console.log("In else 5");

//the empty string ("")
if("")
     console.log("In if 6");// control never reaches here
else console.log("In else 6");


if(NaN==false)
     console.log("NaN==false..It was falsy value not false");//control never reaches here
else console.log("Else part");

if(NaN===false)
     console.log("NaN===false..It was falsy value not false");//control never reaches here
else console.log("Else part");

if(0===false)
     console.log("0===false..It was falsy value not false");//control never reaches here
else console.log("Else part");