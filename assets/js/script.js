document.addEventListener("DOMContentLoaded", function() {
    //array of all the images with name
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
    //run the shuffleCards() function
    shuffleCards(cardArray);

    //created empty array
    let cardsName = [];
    let cardsSelected = [];

    //it loads back card image for all the cards listed in the array
    function createGame(){
        for(let i = 0; i < cardArray.length; i++){
            let cards = document.createElement('img');
            cards.className = 'cards'
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

    function checkCards(){
        let cardId = this.getAttribute('data-id');
        cardsName.push(cardArray[cardId].name);
        for(let i = 0; i < cardsName.length; i++){
            if(cardsName[0] != cardsName[1]){
                this.src = 'assets/images/back-card.webp'
            }
        }
    }

    //it flips the card that is selected by the user
    function flipCards(){
        //cards.src = cardArray[i].img;
        let cardId = this.getAttribute('data-id');
        this.src = cardArray[cardId].img;
        cardsSelected.push(cardArray[cardId]);
        if(cardsSelected == 2){
            checkCards()
        }
    }


    createGame();
    
})






