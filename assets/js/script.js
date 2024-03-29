document.addEventListener("DOMContentLoaded", function() {
    //array of all the images with name
    let cardArray = [
        {
            name: 'ace',
            img: 'assets/images/ace.webp',
            alt: 'Ace playing card'
        },
        {
            name: 'ace',
            img: 'assets/images/ace.webp',
            alt: 'Ace playing card'
        },
        {
            name: 'two',
            img: 'assets/images/two.webp',
            alt: '2 playing card'
        },
        {
            name: 'two',
            img: 'assets/images/two.webp',
            alt: '2 playing card'
        },
        {
            name: 'three',
            img: 'assets/images/three.webp',
            alt: '3 playing card'
        },
        {
            name: 'three',
            img: 'assets/images/three.webp',
            alt: '3 playing card'
        },
        {
            name: 'four',
            img: 'assets/images/four.webp',
            alt: '4 playing card'
        },
        {
            name: 'four',
            img: 'assets/images/four.webp',
            alt: '4 playing card'
        },
        {
            name: 'five',
            img: 'assets/images/five.webp',
            alt: '5 playing card'
        },
        {
            name: 'five',
            img: 'assets/images/five.webp',
            alt: '5 playing card'
        },
        {
            name: 'six',
            img: 'assets/images/six.webp',
            alt: '6 playing card'
        },
        {
            name: 'six',
            img: 'assets/images/six.webp',
            alt: '6 playing card'
        },
        {
            name: 'seven',
            img: 'assets/images/seven.webp',
            alt: '7 playing card'
        },
        {
            name: 'seven',
            img: 'assets/images/seven.webp',
            alt: '7 playing card'
        },
        {
            name: 'eight',
            img: 'assets/images/eight.webp',
            alt: '8 playing card'
        },
        {
            name: 'eight',
            img: 'assets/images/eight.webp',
            alt: '8 playing card'
        },
        {
            name: 'nine',
            img: 'assets/images/nine.webp',
            alt: '9 playing card'
        },
        {
            name: 'nine',
            img: 'assets/images/nine.webp',
            alt: '9 playing card'
        },
        {
            name: 'ten',
            img: 'assets/images/ten.webp',
            alt: '10 playing card'
        },
        {
            name: 'ten',
            img: 'assets/images/ten.webp',
            alt: '10 playing card'
        },
        {
            name: 'jack',
            img: 'assets/images/jack.webp',
            alt: 'Jack playing card'
        },
        {
            name: 'jack',
            img: 'assets/images/jack.webp',
            alt: 'Jack playing card'
        },
        {
            name: 'queen',
            img: 'assets/images/queen.webp',
            alt: 'Queen playing card'
        },
        {
            name: 'queen',
            img: 'assets/images/queen.webp',
            alt: 'Queen playing card'
        },
        {
            name: 'king',
            img: 'assets/images/king.webp',
            alt: 'King playing card'
        },
        {
            name: 'king',
            img: 'assets/images/king.webp',
            alt: 'King playing card'
        }
    ]
    //run the shuffleCards() function
    shuffleCards(cardArray);

    //created empty array
    let cardsName = [];
    let cardArrayId = [];


    //it loads back card image for all the cards listed in the array
    function createGame(){
        for(let i = 0; i < cardArray.length; i++){
            let cards = document.createElement('img');
            cards.className = 'cards'
            cards.alt = cardArray[i].alt;
            cards.src = 'assets/images/back-card.webp';
            cards.setAttribute('data-id', i);
            cards.addEventListener('click', flipCards);
            document.getElementById('game-area').appendChild(cards);
        }
    }

    //it randomise the array using in built math random function
    function shuffleCards(array){
        array.sort(() => Math.random() - 0.5);
    }


    //it flips the card that is selected by the user
    function flipCards(){

        let cardId = this.getAttribute('data-id');
        cardsName.push(cardArray[cardId].name);
        cardArrayId.push(cardId);
        this.src = cardArray[cardId].img;
        if(cardsName.length === 2){
            setTimeout(checkCards, 500);
        }
    }

    //it checks the name cards compare it and hide the cards when user finds the match
    function checkCards(){
        let cards = document.getElementsByClassName('cards');
        let card1 = cardArrayId[0];
        let card2 = cardArrayId[1];
        if(cardsName[0] === cardsName[1]){
            alert('Correct');
            cards[card1].style.visibility = 'hidden';
            cards[card2].style.visibility = 'hidden';
        }else{
            cards[card1].src = 'assets/images/back-card.webp';
            cards[card2].src = 'assets/images/back-card.webp';
        }
        cardsName = [];
        cardArrayId = [];
    }
    
    createGame();

})






