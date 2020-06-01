/*
* querySelector()
* addEventListener()
* setInterval()
* clearInterval()
* forEach()
* classList.containts()
* classList.add()
* classList.remove()
*
* */
document.addEventListener('DOMContentLoaded',() => {
    //pick elements from html

    const squares = document.querySelectorAll('.grid div');
    const timeLeft = document.querySelector('#time-left');
    const result = document.querySelector('#result');
    const startBtn = document.querySelector('#button');
    const width = 9
    let currentIndex = 76;
    let currentTime = 20
    let timerId
    const carsLeft = document.querySelector('.cars-left');
    const carsRight = document.querySelector('.cars-right');
    const logsLeft = document.querySelector('.log-left');
    const logsRight = document.querySelector('.log-right');

    //render frog on starting block
    squares[currentIndex].classList.add('frog')

    //write a function that will move the frog

    function moveFrog(e) {
        squares[currentIndex].classList.remove('frog');
        switch (e.keyCode) {
            case 37:
                if(currentIndex % width !== 0) currentIndex -=1
                break
            case 38:
                if(currentIndex - width >=0 ) currentIndex -= width
                break
            case 39:
                if(currentIndex % width < width -1) currentIndex +=1
                break
            case 40:
                if(currentIndex + width < width * width) currentIndex += width
                break
        }

        squares[currentIndex].classList.add('frog')
        lose()
        win()
    }

    //move cars
    function autoMoveCars() {
        carsLeft.forEach(carsLeft => moveCarLeft(carsLeft))
        carsRight.forEach(carsRight => moveCarLeft(carsRight))
    }

    //move the car left on a time loop
    function moveCarLeft(carsLeft) {
        switch (true) {
            case carsLeft.classList.contains('c1'):
                carsLeft.classList.remove('c1')
                carsLeft.classList.add('c2')
                break
            case carsLeft.classList.contains('c2'):
                carsLeft.classList.remove('c2')
                carsLeft.classList.add('c3')
                break
            case carsLeft.classList.contains('c3'):
                carsLeft.classList.remove('c3')
                carsLeft.classList.add('c1')
                break
        }
    }

    //move the right car
    function moveCarRight(carRight) {
        switch (true) {
            case carRight.classList.contains('c1'):
                carRight.classList.remove('c1')
                carRight.classList.add('c2')
                break
            case carRight.classList.contains('c2'):
                carRight.classList.remove('c2')
                carRight.classList.add('c3')
                break
            case carRight.classList.contains('c3'):
                carRight.classList.remove('c3')
                carRight.classList.add('c1')
                break
        }
    }

    //move the logs
    function autoMoveLogs() {
        logsLeft.forEach(logLeft => moveLogLeft(logLeft));
        logsRight.forEach(logRight => moveLogRight(logRight));

    }

    //move the log left on a time loop
    function moveLogLeft(logLeft) {
        switch (true) {
            case logLeft.classList.contains('l1'):
                logLeft.classList.remove('l1')
                logLeft.classList.add('l2')
                break
            case logLeft.classList.contains('l2'):
                logLeft.classList.remove('l2')
                logLeft.classList.add('l3')
                break
            case logLeft.classList.contains('l3'):
                logLeft.classList.remove('l3')
                logLeft.classList.add('l4')
                break
            case logLeft.classList.contains('l4'):
                logLeft.classList.remove('l4')
                logLeft.classList.add('l5')
                break
            case logLeft.classList.contains('l5'):
                logLeft.classList.remove('l5')
                logLeft.classList.add('l1')
                break
        }
    }

    //move the right log
    function moveLogRight(logRight) {
        switch (true) {
            case logRight.classList.contains('l1'):
                logRight.classList.remove('l1')
                logRight.classList.add('l5')
                break
            case logRight.classList.contains('l2'):
                logRight.classList.remove('l2')
                logRight.classList.add('l1')
                break
            case logRight.classList.contains('l3'):
                logRight.classList.remove('l3')
                logRight.classList.add('l2')
                break
            case logRight.classList.contains('l4'):
                logRight.classList.remove('l4')
                logRight.classList.add('l3')
                break
            case logRight.classList.contains('l5'):
                logRight.classList.remove('l5')
                logRight.classList.add('l4')
                break
        }
    }


    //rules to win frogger
    function win() {
        if(squares[4].classList.contains('frog')){
            result.innerHTML = 'you won'
            squares[currentIndex].classList.remove('frog')
            clearInterval(timerId)
            document.removeEventListener('keyop',moveFrog);
        }
    }

    //rules to lose frogger

    function lose() {
        if((currentTime === 0 ) ||
            (squares[currentIndex].classList.contains('c1')) ||
            (squares[currentIndex].classList.contains('l5')) ||
            (squares[currentIndex].classList.contains('l4'))) {
            result.innerHTML = 'you lose'
            clearInterval(timerId)
            document.removeEventListener('keyup',moveFrog)
        }
    }

    //move the frog when its on the log moving left

    function moveWithLogLeft() {
        if(currentIndex >= 27 && currentIndex < 35){
            squares[currentIndex].classList.remove('frog');
            currentIndex +=1
            squares[currentIndex].classList.add('frog')
        }
    }
})