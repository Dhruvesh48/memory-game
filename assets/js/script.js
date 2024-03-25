document.addEventListener("DOMContentLoaded", function() {
    createGame();
    
})

function createGame(){
    let cardArray = [
        {
            name: 'ace',
            img: 'assets/images/ace.webp'
        },
        {
            name: 'ace',
            img: 'assets/images/ace.webp'
        },
        {
            name: 'two',
            img: 'assets/images/two.webp'
        },
        {
            name: 'two',
            img: 'assets/images/two.webp'
        },
        {
            name: 'three',
            img: 'assets/images/three.webp'
        },
        {
            name: 'three',
            img: 'assets/images/three.webp'
        },
        {
            name: 'four',
            img: 'assets/images/four.webp'
        },
        {
            name: 'four',
            img: 'assets/images/four.webp'
        },
        {
            name: 'five',
            img: 'assets/images/five.webp'
        },
        {
            name: 'five',
            img: 'assets/images/five.webp'
        },
        {
            name: 'six',
            img: 'assets/images/six.webp'
        },
        {
            name: 'six',
            img: 'assets/images/six.webp'
        },
        {
            name: 'seven',
            img: 'assets/images/seven.webp'
        },
        {
            name: 'seven',
            img: 'assets/images/seven.webp'
        },
        {
            name: 'eight',
            img: 'assets/images/eight.webp'
        },
        {
            name: 'eight',
            img: 'assets/images/eight.webp'
        },
        {
            name: 'nine',
            img: 'assets/images/nine.webp'
        },
        {
            name: 'nine',
            img: 'assets/images/nine.webp'
        },
        {
            name: 'ten',
            img: 'assets/images/ten.webp'
        },
        {
            name: 'ten',
            img: 'assets/images/ten.webp'
        },
        {
            name: 'jack',
            img: 'assets/images/jack.webp'
        },
        {
            name: 'jack',
            img: 'assets/images/jack.webp'
        },
        {
            name: 'queen',
            img: 'assets/images/queen.webp'
        },
        {
            name: 'queen',
            img: 'assets/images/queen.webp'
        },
        {
            name: 'king',
            img: 'assets/images/king.webp'
        },
        {
            name: 'king',
            img: 'assets/images/king.webp'
        }
    ]
    shuffleCards(cardArray);
    for(let i = 0; i < cardArray.length; i++){
        let cards = document.createElement('img');
        cards.className = 'cards'
        cards.src = 'assets/images/back-card.webp';
        document.getElementById('game-area').appendChild(cards);
    }
    
}

let cardsChosen = [];
let cardsChosenId = [];

function shuffleCards(array){
    array.sort(() => Math.random() - 0.5);
}

function flipCards(){
    if(cardsChosen === 2){
        setTimeout()
    }
}

function checkCards(){
    for(let i = 0; i < cardsChosenId.length; i++){
        if(cardsChosenId[0] === cardsChosenId[1]){
            cards.src = 'assets/images/blank-image.webp'
        }else{
            cards.src = 'assets/images/back-card.webp'
        }
    }
}



