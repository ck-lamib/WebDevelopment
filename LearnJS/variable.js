(function(){
})();

// post increment example
(function () {
    let a = 2;
    function variable_(){
        console.log(a++);
    }
    variable_();
    console.log(a);
})();




// pre increment example
(function () {
    let a = 2;
    function variable_(){
        console.log(++a);
    }
    variable_();
    console.log(a);
})();

var x;
console.log(x) // undefined
var x = "local and global variable";
console.log(x) // local and global variable

let x = "block-scope local variable";

const x = "constant value such as array, pi";




(function(){
    var myArray = [1];
if (!myArray[0]) console.log("yes");
else console.log("no");
})();
