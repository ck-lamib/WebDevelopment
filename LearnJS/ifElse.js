(function(){
    function checkEvenOdd(number){
        if(number%2 == 0){
            console.log(`The given number "${number}" is even.`);
        }
        else console.log(`The given number "${number} is odd.`);
    }
    checkEvenOdd(301); //The given number "301 is odd.
    checkEvenOdd(30);  //The given number "30" is even.
})();

(function(){
    var b = new Boolean(false);
    if(b){
        console.log("Return True");  //it is returned
    }
    else{
        console.log("Return false");
    }

    if(b == true){
        console.log("Return True");
    }
    else{
        console.log("Return false");  //it is returned
    }

})();
    