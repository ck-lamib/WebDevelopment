(function(){
    let Friday = 1;
    function DayMessage(day){
        switch(day){
            case 'Sunday':
                console.log("Sunday is son and Day");
                break;
            case 'Monday':
                console.log("Monday is moon and day");
                break;
            case 'Tuesday':
                console.log("Tuesday is youtube day");
                break;
            case 'Wednesday':
                console.log("Wednesday is weed day");
                break;
            case 'Thursday':
                console.log("Thursday is thurr day");
                break;
            case Friday:  //NOte here
                console.log("Friday is fried Day");
                break;
            case 'Saturday':
                console.log("Happy holiday");
                break;
            default:
                console.log("please select any day of week");
        }
    }
    DayMessage('Sunday');  //Sunday is son and Day
    DayMessage('Saturday');  //Happy holiday
})();

(function(){
    if(fruitType == undefined) fruitType = "Payayas";
    switch (fruitType) {
        case 'Oranges':
          console.log('Oranges are $0.59 a pound.');
          break;
        case 'Apples':
          console.log('Apples are $0.32 a pound.');
          break;
        case 'Bananas':
          console.log('Bananas are $0.48 a pound.');
          break;
        case 'Cherries':
          console.log('Cherries are $3.00 a pound.');
          break;
        case 'Mangoes':
          console.log('Mangoes are $0.56 a pound.');
          break;
        case 'Papayas':
          console.log('Papayas are $2.79 a pound.');  //this is printed
          break;
        default:
          console.log(`Sorry, we are out of ${fruitType}.`);
      }
      console.log("Is there anything else you'd like?");
})();