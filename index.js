function writeCards(namesArray, eventName){
    const messages = [];
    for (let g = 0; g < namesArray.length; g++){
        //add stuff to a new array and return this array
        
        messages.push(`Thank you, ${namesArray[g]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown(number) {
    
    while (number > 0){
        console.log(number);
        number--;
    }
    console.log(number);
}
countDown(10);