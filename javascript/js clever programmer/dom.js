// console.log('hello')

let titleDiv = document.getElementById('titleDiv')
let message = 'Your game'

// console.log('before: ', titleDiv.innerText)
// titleDiv.innerText = message
// console.log('after: ',titleDiv.innerText)

titleDiv.innerHTML = `<p>${message}</p>`

titleDiv.style.color = 'red'
document.getElementById('titleDiv').style.color = 'white'
titleDiv.style.backgroundColor = 'black' 

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

// redDiv.onclick = () => console.log('User chose: Red')
// yellowDiv.onclick = () => console.log('User chose: Yellow')
// greenDiv.onclick = () => console.log('User chose: Green')

const squares = document.querySelectorAll('.colorSquare')
// console.log(squares)

// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

const timesClicked = {"red": 0, "yellow":0 , "green": 0}

squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] += 1
        square.innerText = timesClicked[square.value]
    }
})

function clearScores() {
    timesClicked.red = 0
    timesClicked.yellow = 0
    timesClicked.green = 0
    squares.forEach(square =>square.innerText = 0)
}
const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScores()

