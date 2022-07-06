//function expression
(function(){
    var add = function(num1,  num2){
        console.log(num1+num2);
    }
    add(2,3);//5
    console.log(add); //function add(num1, num2)
})();