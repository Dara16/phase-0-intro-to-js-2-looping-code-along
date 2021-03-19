// Code your solutions in this file

/*for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts =["teddy bear", "drone", "doll"];

function wrapGifts(gift){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow`);
        //debugger;
    }
  return gifts;  
}

wrapGifts(gifts); */

const names = ['Lisa', 'Kaitlin', 'Jan'];
const event = 'surprise';


function writeCards(names, event){
    const myArray = []
    for (let i = 0; i < names.length; i++){
        console.log(i);
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        myArray[i] = message;
        debugger;
    }
  return myArray;  
}

writeCards(message);



function countDown(n){
while (n >= 0) {
  
    console.log(n);
    n--;
  }
}
countDown(10);
countDown(4);


