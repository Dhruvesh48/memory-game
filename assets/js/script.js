// Wait for DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {
    //array of all the images with name and their alt text
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
    ];

    //run the shuffleCards() function
    shuffleCards(cardArray);

    //created empty array for their name and their ID
    let cardsName = [];
    let cardArrayId = [];


    //it loads back card image for all the cards listed in the array
    function createGame(){
        // Goes through the cardArray
        for(let i = 0; i < cardArray.length; i++){
            // create images with class name and alt text
            let cards = document.createElement('img');
            cards.className = 'cards';
            cards.alt = cardArray[i].alt;
            cards.src = 'assets/images/back-card.webp';
            // set i as data-id
            cards.setAttribute('data-id', i);
            //create click function on all the images that is created
            cards.addEventListener('click', flipCards);
            // set all the images in game-area section in HTML.
            document.getElementById('game-area').appendChild(cards);
        };
    };

    //it randomise the array using in built math random function taken from a website which should be credited inside the README.md file
    function shuffleCards(array){
        array.sort(() => Math.random() - 0.5);
    };


    //it flips the card that is selected by the user
    function flipCards(){
        // get the Id of i from the create get function as cardId
        let cardId = this.getAttribute('data-id');
        // push the name of the card that user as selected
        cardsName.push(cardArray[cardId].name);
        // push the Id of the card that user as selected
        cardArrayId.push(cardId);
        // set the image of a card that user as selected
        this.src = cardArray[cardId].img;
        // check if user as selected 2 cards or not
        if(cardsName.length === 2){
            setTimeout(checkCards, 100);
        };
    };

    //it checks the name cards compare it and hide the cards when user finds the match
    function checkCards(){
        // get the class cards from the HTML
        let cards = document.getElementsByClassName('cards');
        // first and second Id of the image that user is selcted
        let card1 = cardArrayId[0];
        let card2 = cardArrayId[1];
        //if(setTimeout(unableDoubleClick, 0, card1)){
        // check if the name of first and second match and the Id does not
        if(card1 != card2 && cardsName[0] === cardsName[1]){
            // alert the user correct and gets hidden from the website
            alert('Correct');
            cards[card1].style.visibility = 'hidden';
            cards[card2].style.visibility = 'hidden';
        }else if(card1 == card2){
            alert('Sorry cannot choose the same card');
            cards[card1].src = 'assets/images/back-card.webp';
        }
        else{
            // alert user incorrect and gets the back-card image
            cards[card1].src = 'assets/images/back-card.webp';
            cards[card2].src = 'assets/images/back-card.webp';
            alert('Incorrect, please try again');
        };
        //}
        //empty out array so user can choose different option
        cardsName = [];
        cardArrayId = [];
    }
    
    createGame();

})






