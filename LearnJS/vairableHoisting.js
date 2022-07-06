//throws reference error
(function () {
    console.log(y); //error
})();

//Here x is decleared later and is hoisted or lifted. -> hoisting
(function () {
    console.log(x); //undefine
    var x;
    // if(x === undefined) 
})();


(function () {
    console.log(x);  //error
    if (x === undefined) { let x; } //local variable as let is used. so, throws error
})();


(function () {
    console.log(x); // undefined
    if (x === undefined) { let x; } //var is used. so, doesnot throws error
})();


//look temporal dead zone
(function () {
    console.log(x); // error because let and const show be fully initialized but this is not the case of var
    let x;
    x = 2;
})();

(function () {
    console.log(x); //undefined
    var x;
})();

(function () {
    // console.log("Program Started and Variable z is in Temporal Dead Zone");
    // console.log("Variable z is in Temporal Dead Zone");
    // console.log("Variable z is in Temporal Dead Zone");
    // console.log("Variable z is in Temporal Dead Zone");
    // console.log("Variable z is in Temporal Dead Zone");
    // let z = 6;
    // console.log("Now Variable z is not in Temporal Dead Zone");
    // console.log(z);
    console.log(x); //throws error tdz concept
    let x = 2;
})();

//show error
(function () {
    let bestFood = "Fish and Chips";

    // Declare another variable:
    let myBestMeal = function () {
        console.log(bestFood);
        var bestFood = "Vegetable Fried Rice";
    };

    // Invoke myBestMeal function:
    myBestMeal();

})();


