// anonymous object = objects without a name 
//                      not directly referenced
//                      less syntax. no need for unique names

class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;

    }   
}

// let card1 = new Card("A", "hearts");
// let card2 = new Card("A", "spades");
// let card3 = new Card("A", "diamond");
// let card4 = new Card("A", "clubs");
// let card5 = new Card("2", "hearts");
// let card6 = new Card("2", "spades");
// let card7 = new Card("2", "diamond");
// let card8 = new Card("2", "clubs");

// let cards = [card1, card2, card3, card4, card5, card6, card7, card8];

let cards = [new Card("A", "hearts"), 
            new Card("A", "spades"), 
            new Card("A", "diamond"),
            new Card("A", "clubs"), 
            new Card("2", "hearts"), 
            new Card("2", "spades"), 
            new Card("2", "diamond"), 
            new Card("2", "clubs") ]

// console.log(card1.value + card1.suit);
console.log(cards[1].value + cards[1].suit);

cards.forEach(card => console.log(`${card.value} ${card.suit}`))