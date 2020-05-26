/*
* querySelector()
* addEventListener()
* setInterval()
* keyCodes
* pop()
* unshift()
* push()
* classList.contains()
* classList.add()
* classList.remove()
*
* */

document.addEventListener('DOMContentLoaded',() =>{

    const squares = document.querySelectorAll('.grid div');
    const scoreDisplay = document.querySelector('span');
    const startBtn = document.querySelector('.start');

    const width = 10;
    let currentIndex = 0;  // so first div in our grid
    let appleIndex = 0; // so first div in our grid
    let currentSnake = [2,1,0]; // so the 3rd in our grid being 2 (or the head), and 0 being the en (tail, with all 1's being the body from now on )
    let direction = 1;
    let score = 0;
    let speed = 0.9;
    let intervalTime= 0;
    let interval = 0;

    //to start, and restar the game

    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[appleIndex].classList.remove('apple')
        clearInterval(interval)
        score = 0
        //randomApple()
        direction = 1
        scoreDisplay.innerText = score;
        intervalTime = 1000;
        currentSnake = [2,1,0];
        currentIndex = 0;
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        interval = setInterval(moveOutComes,intervalTime);


    }

    //function that deals with all the ove outcomes of the snake

    function moveOutComes() {

    //deal with snake hitting border and snakes hitting self
    if(
        (currentSnake[0] + width >= (width*width) && direction === width ) ||
        (currentSnake[0] % width === width - 1 && direction === 1) ||
        (currentSnake[0] % width === 0 && direction === 1) ||
        (currentSnake[0] - width < 0 && direction === -width) ||
        squares[currentSnake[0+ direction].claim() ]
    )
    //deal with snake getting apple

    }
    //assing function to keycodes
    function control(e) {
        squares[currentIndex].classList.remove('snake'); //we are removing the class from all the squares

        if(e.keyCode === 39 ){
            direction = 1; //if we press the right arrown on our keyboeard, the snake will go the right one
        }else if (e.keyCode === 38){
            direction = -width; //if we press down arrow, the snake will go back ten divs, appearing to go up
        }else if(e.keyCode === 37){
            direction -1; //if we press left, the snake will  go left one div
        }else if(e.keyCode === 40){
            direction = +width; //if  we press down, the sanek head will instanly appear in the div ten divs from where you are now
        }

        document.addEventListener('keyup',control)


    }

});
