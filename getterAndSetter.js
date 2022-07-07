(function(){
    var personDetails={
        name:"Bimal",
        get getName(){
            return this.name;
        },
        set setName(name){
            this.name = name;
        }
    };
    console.log(personDetails.name); //bimal
    personDetails.setName = "hello";
    console.log(personDetails.name); //hello
})();


//After declearation of object getter and setter can be made as:
Object.defineProperty(objectName,{});

(function(){
    const Student = {name: "Bimal", age:20};

    Object.defineProperties(Student, {
        'getName': { get: function(){return this.name;}},
        'setName': { set: function(name) {this.name = name;}}
    });
    console.log(Student.getName); //Bimal
    Student.setName = "Suraj";
    console.log(Student.getName);  //Suraj
})();

(function(){
    const Student = {name:"Bimal", age:"20"};
    Object.defineProperties(Student,{
        "getAge": {get: function(){
            return this.age;
        }},
        "setAge": {set: function(age) {
            this.age = age;
        }}
    });
    console.log(Student.getAge); //20
    Student.setAge = 4;
    console.log(Student.getAge); //4
})();