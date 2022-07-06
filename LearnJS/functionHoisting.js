(function () {
    printName(); //Bimal
    function printName() {
        console.log("Bimal");
    }
})();


(function () {
    foo(); // "bar"

    /* Function declaration */
    function foo() {
        console.log('bar');
    }
})();


//look for function declearation and expression to know this
(function () {
    // Doesn't throw ReferenceError
    console.log(baz) // undefined

    // Throws 'TypeError: baz is not a function'
    baz();

    /* Function expression */
    var baz = function () {
        console.log('bar2');
    };
})();
