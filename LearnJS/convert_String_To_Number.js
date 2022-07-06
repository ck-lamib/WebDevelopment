// converting string to number
(function(){
    let x,y,z,a,b,c,d,e;
    x="2.1";
    y = '1101'  //binary no. (1248) =13
    z = '1101'  //suppose a string
    a = parseInt(x,10);
    b = parseInt(y,2);  // shows y is binary
    c = parseInt(z);  // default assume z is decimal i.e., (y,10);
    d = parseFloat("4000.00001");
    e = parseFloat("4000.0000");
    console.log(typeof(a) + " a: "+a);  //number a: 2
    console.log(typeof(b) + " b: "+b);  //number a: 13
    console.log(typeof(c) + " c: "+c);  //number a: 1101
    console.log(typeof(d) + " d: "+d);  //number d: 40000.00001    convert string to float
    console.log(typeof(e) + " e: "+e);  //number d: 40000          note .00000 is removed here
})();

// alternative way of converting string to number
(function(){
    x= "1.1";
    y= "1.1";
    a= x+y;
    b= (+x)+(+y);
    console.log(typeof(a) + " a: "+a);  //string a: 1.11.1
    console.log(typeof(b) + " b: "+ b);  //number b: 2.2
})();