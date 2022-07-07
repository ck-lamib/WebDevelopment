
//this in function
(function () {
    function Car(year, make, model) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.displayCar = displayCar;
    }
    function displayCar() {
        const result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
        console.log(result);
    }
    var c1 = new Car("2002", "plastic", "Tesla");
    c1.displayCar();  //A Beautiful 2002 plastic Tesla
})();


//this in object
(function () {
    const Student = {
        name: "Bimal",
        age: 20
    }
    const Son = {
        name: "Suraj",
        age: 21
    }

    function displayName() {
        const result = `My name is ${this.name}`;
        console.log(result);
    }
    Student.printName = displayName;
    Son.printName = displayName;
    Son.printName();  //My name is Suraj
    Student.printName();  //My name is Bimal
    const Bimal = Object.create(Student);  //creating new object of Object Student
    Bimal.address = "Baglung";
    console.log(Bimal.address);//Baglung
})();

(function () {
    const Student = new Object();
    Student.name = "bimal";
    Student.age = 20;
    console.log(Student); //Object { name: "bimal", age: 20 }
    delete Student.name;
    console.log(Student); //Object { age: 20 }

})();

(function () {
    const fruit = { name: 'apple' };
    const fruitbear = { name: 'apple' };

    console.log(fruit == fruitbear);  //return false
    console.log(fruit === fruitbear);  //return false
    //But
    console.log(fruit.name == fruitbear.name); // return true
    console.log(fruit.name === fruitbear.name); // return true
})();

(function () {
    // Two variables, a single object
    const fruit = { name: 'apple' };
    const fruitbear = fruit;  // Assign fruit object reference to fruitbear

    // Here fruit and fruitbear are pointing to same object
    console.log(fruit == fruitbear); // return true
    console.log(fruit === fruitbear); // return true
    fruit.name = 'grape';
    console.log(fruit); // output: { name: "grape" }, instead of { name: "apple" }
    console.log(fruitbear); // output: { name: "grape" }, instead of { name: "apple" }
    console.log(fruit == fruitbear); // return true
    console.log(fruit === fruitbear); // return true

    //But
    fruit.name = 'apple'; //resetting name of fruit to its previous posn
    console.log(fruit); // output: { name: "apple" }
    fruitbear.name = 'grape';
    console.log(fruit); // output: { name: "grape" }, instead of { name: "apple" }
    console.log(fruitbear); // output: { name: "grape" }, instead of { name: "apple" }
    console.log(fruit == fruitbear); // return true
    console.log(fruit === fruitbear); // return true
})();

//Note: read carefully above block of code