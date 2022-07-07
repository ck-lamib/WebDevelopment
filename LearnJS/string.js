(function () {
    console.log("bimal \nkhatri");
    console.log(`bimal \nkhatri`);
    console.log("bimal \nkhatri".length); //13
})();

(function () {
    const Details = { name: "hello" };
    const Details_ = ["0th index"];
    var name = "bimal";
    console.log(`My name is ${name}`); // My name is bimal
    console.log("My name is ${name}"); // My name is ${name}
    console.log(`My name is ${Details.name}`); // My name is hello
    console.log(`My name is ${Details_[0]}`); // My name is 0th index
    var linebreak = "bimal \
    khatri \
    is \
    me";
    console.log(linebreak);   // bimal     khatri     is     me

    var poem =
'Roses are red,\n\
Violets are blue.\n\
Sugar is sweet,\n\
and so is foo.';
console.log(poem);  
})();


(function(){
    var hello = (name) =>{
      console.log("hello "+name);
    };
    hello("bimal");

  })();
(function(){
    var hello = function(name){
      console.log(`hello ${name}`);
    };
    hello("Bimal");

  })();











  (function () {
    const formatArg = (arg) => {
        if (Array.isArray(arg)) {
            // Print a bulleted list
            return arg.map((part) => `- ${part}`).join("\n");
        }
        if (arg.toString === Object.prototype.toString) {
            // This object will be serialized to "[object Object]".
            // Let's print something nicer.
            return JSON.stringify(arg);
        }
        return arg;
    }

    const print = (segments, ...args) => {
        // For any well-formed template literal, there will always be N args and
        // (N+1) string segments.
        let message = segments[0];
        segments.slice(1).forEach((segment, index) => {
            message += formatArg(args[index]) + segment;
        });
        console.log(message);
    }

    const todos = [
        "Learn JavaScript",
        "Learn Web APIs",
        "Set up my website",
        "Profit!",
    ];

    const progress = { javascript: 20, html: 50, css: 10 };

    print `I need to do:${todos} 
    My current progress is: ${progress}`;

    // I need to do:
    // - Learn JavaScript
    // - Learn Web APIs
    // - Set up my website
    // - Profit!
    // My current progress is: {"javascript":20,"html":50,"css":10}
})();