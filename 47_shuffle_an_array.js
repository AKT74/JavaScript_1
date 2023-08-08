let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);

// console.log(cards[0]);
cards.forEach(card => console.log(card))

function shuffle(array){
    let current = array.length;

    while(current != 0){
        let random = Math.floor(Math.random() * array.length)
        current -=1;

        let temp = array[current];
        array[current] = array[random];
        array[random] = temp;


    }

    return array;
}