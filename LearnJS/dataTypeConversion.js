(function(){
    let x = 0;
    console.log(typeof(x));  //number
    x = "0"
    console.log(typeof(x));  //string
})();

(function(){
    let x,y,z;
    x=2;
    y=3;
    z="4";
    a= x+y+z;
    b= z+x+y;
    console.log(typeof(a) + " a: "+a);  //string a: 54
    console.log(typeof(b) + " b: "+ b);  //string b: 423
})();

//With all other operators except +, JavaScript does not convert numeric values to strings.
(function(){
    let x,y,z;
    x=2;
    y=3;
    z="4";
    a= x*z;
    b = x*y;
    c = z - x;
    console.log(typeof(a) + " a: "+a);  //number a: 8
    console.log(typeof(b) + " b: "+ b);  //number b: 6
    console.log(typeof(c) + " c: "+ c);  //number c: 2
})();


// converting string to number -> look convert_String_To_Number.js file