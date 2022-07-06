(function(){
    var x = 20; // global variable
    function sum(){
        var y = 10;  // local variable
        console.log("value of x: " + x++); // 20
        console.log("value of y: " + y);  //10
        return (x+y);
    }
    sum();
    console.log("value of x: " + x); //21
    console.log("value of y: " + y);  //undefine
})();


(function(){
    var x = 20; // global variable
    function sum(){
        var x = 10;  // local variable
        console.log("value of x: " + x++); // 10
    }
    sum();
    console.log("value of x: " + x); //20
})();

(function(){
    var x = 20; // global variable
    function sum(){
        x = 10; //changing value of x
        console.log("value of x: " + x++); // 10
    }
    sum();
    console.log("value of x: " + x); //11
})();


//var x is used multiple times
(function(){
    var x = 20; // global variable
    var x = 40;
    function sum(){
        console.log("value of x: " + x++); // 40
    }
    sum();
    console.log("value of x: " + x); //41
})();

//var x and let x cannot be used. if a pre decleared variable is redecleared with let/const, throws error. But var can be redecleared
(function(){
    var x = 20; // global variable

    var x = 40;
    let x = 30;

    function sum(){
        console.log("value of x: " + x++); // error
    }
    sum();
    console.log("value of x: " + x); //error
})();