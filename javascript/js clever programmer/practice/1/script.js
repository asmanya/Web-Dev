const redDiv = document.getElementById('red')
const yellowDiv = document.getElementById('yellow')
const greenDiv = document.getElementById('green')

const timesClicked = {'red': 0,'yellow': 0,'green': 0}

const squares = document.querySelectorAll('.btn')

squares.forEach(square => {
    square.onclick = () =>{
        timesClicked[square.value] += 1
        square.innerText = timesClicked[square.value]
    }
})

function clearScore() {
    timesClicked.red = 0
    timesClicked.yellow = 0
    timesClicked.green = 0
    squares.forEach(square => square.innerText = 0)
}

const clearGameBtn = document.getElementById('btn4')
clearGameBtn.onclick = () => clearScore()