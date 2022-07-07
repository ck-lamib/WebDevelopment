(function(){
    const animal = {
        type: "Buffaloes",
        displayType: function(){
            console.log(this.type);
        }
    };
    const fish = Object.create(animal);
    fish.type = "Fish";  //will assign fish in place of buffalloes
    fish.displayType();  //fish
    const animall = Object.create(animal);  //Buffaloes
    animall.displayType();
    console.log(animal[0]);
})();

