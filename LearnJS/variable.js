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

(function(){
    var x = null;
    console.log(x*30);  //0
})();

(function (){
    function add(){
        console.log(2+5);
    }
    console.log(add);
    add();
})();

(function (){
    const hel = 4;
    let x = 2;
    function add(){
        const hel = 9;
        let x = 8;
        console.log(x);//8
        console.log(hel); //9
    }
    add();
    console.log(x); //4
    console.log(hel); //2
})();


//throws redecleration error
(function (){
    function add(){
        console.log(2+5);
    }
    let add = 2;
    console.log(add);
    add();
})();

