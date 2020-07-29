document.addEventListener('DOMContentLoaded',() => {
    const cardArray = [
        {
            name: 'maizena',
            img: 'img/food_1.png'
        },
        {
            name: 'maizena',
            img: 'img/food_1.png'
        },
        {
            name: 'pastaflora',
            img: 'img/food_2.png'
        },
        {
            name: 'pastaflora',
            img: 'img/food_2.png'
        },
        {
            name: 'pizza',
            img: 'img/food_3.png'
        },
        {
            name: 'pizza',
            img: 'img/food_3.png'
        },
        {
            name: 'burger',
            img: 'img/food_4.png'
        },
        {
            name: 'burger',
            img: 'img/food_4.png'
        },
        {
            name: 'rice',
            img: 'img/food_5.png'
        },
        {
            name: 'rice',
            img: 'img/food_5.png'
        },
        {
            name: 'tortafrita',
            img: 'img/food_6.png'
        },
        {
            name: 'tortafrita',
            img: 'img/food_6.png'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

//create your board
    function createBoard(){
        for(let i = 0; i < cardArray.length;i++){
            let card = document.createElement('img');
            card.setAttribute('src','img/back.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click',flipCard);
            grid.appendChild(card);
        }
    }
    createBoard();

    //check for matches
    function checkForMartch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1]){
            alert('You found a match');
            cards[optionOneId].setAttribute('src','img/white.png');
            cards[optionTwoId].setAttribute('src','img/white.png');
            cardsWon.push(cardsChosen);
        }else{
            cards[optionOneId].setAttribute('src','img/back.png');
            cards[optionTwoId].setAttribute('src','img/back.png');
            alert('sorry try again!');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = "congratiulations ! you foun them all";
        }
    }
    //flip your card

    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src',cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMartch,500); 
        }
    }
});

