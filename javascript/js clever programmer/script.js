// console.log('Hello World')
// console.log('asmanya')

// Variables
// let name = 'peter pan'
// console.log(name)

// let sentence = `how are you doing today, hope you're doing okay, have a great day`
// console.log(sentence)

// Operators
// fruit = prompt('What is your fav fruit')
// console.log(fruit)

// food = Number(prompt('How much was the food'))
// tipPercentage = prompt('tip % ?') /100
// tipAmount = food*tipPercentage
// total = tipAmount + food

// console.log(`The tip is ${tipAmount}`)
// console.log(`The total is ${total}`)
// alert(`The tip is ${tipAmount}`)

// console.log(2 * 5)
// console.log(2 + 5)
// console.log(2 - 5)
// console.log(2 / 5)
// console.log(11 % 5)
// console.log(2**5)

// console.log(Math.floor(112.30))
// console.log(Math.ceil(112.30))
// console.log(Math.floor(Math.random() * 3))

// let weather = prompt(`How is the weather`)
// if (weather == `rain`){
//     console.log(`Grab your umbrella`)
// }
// else{
//     console.log(`Wear your sunglasses`)
// }

// const introducer = (name, shirt) => {
//     const person = {
//         name: name,
//         shirt: shirt,
//         assets: 100000,
//         liabilities: 50000,
//         netWorth: function (){
//             return this.assets - this.liabilities
//         }
//     }
//     const intro = `Hi there! I am ${person.name}, and my shirt is ${person.shirt}. My total net worth is $${person.netWorth()}`

//     return intro
// }

// console.log(introducer('asmanya','black'))

// const numbers = [1,2,3,4,5,6]

// const result = []
// for(const number of numbers){
//     result.push(number * 2)
// }

// console.log(result)

// const double = (numbers) => {
//     let result =[]
//     for(const number of numbers){
//         result.push( number ** 2)
//     }
//     return result
// }

// console.log(double([1,2,3,4,5]))

// const letterCounter = () =>{
//     let result = 0;
//     for(const index in phrase){
//         result = Number(index) + 1
//     }
//     return {result}
// }

// const phrase = prompt('Write your phrase')
// console.log(letterCounter(phrase))

// const phrase = 'ayo wassup niggaa'
// console.log(phrase.length)

// console.log('ayo ayo ayo'.length)

// const sumArray = (numbers) => {
//     let result = 0
//     for(const result of numbers){
//         result = result + numbers[result]
//     }
//     return {result}
// }

// console.log(sumArray([1,2,3,4]))

// const sumArray1 = (numbers) => {
//     let result = 0
//     for(const number of numbers){
//         result += number
//     }
//     return {result}
// }

// let array = [1,2,3,4,5]
// console.log(sumArray1(array))

// const sum = (numbers) =>{
//     let result = 0
//     for(const number of numbers){
//         result = result + number
//     }
//     return {result}
// }

// const oi = [1,2,3,4,5]
// console.log(sum(oi))

// const max = (numbers) =>{
//     let result = numbers[0]
//     for(number of numbers){
//         if(number > result){
//             result = number
//         }
//     }
//     return {result}
// }

// const yeah = [1,21,324,43323,233233417,143434136]
// console.log(max(yeah))

// const letterFrequency = (phrase) =>{
//     let frequency = {}
//     for(const letter of phrase){
//         if(letter in frequency){
//             frequency[letter] = frequency[letter] + 1
//         }
//         else{
//             frequency[letter] = 1
//         }
//     }
//     return frequency
// }

// console.log(letterFrequency('hahaerthaersd'))

// const frequency1 = (phrase) =>{
//     let freq = {}
//     for(const letter of phrase){
//         if(letter in freq){
//             freq[letter] = freq[letter] + 1
//         }
//         else{
//             freq[letter] = 1
//         }
//     }
//     console.log(freq)
// }

// frequency1('how many times you ahppen ,huh?')

//  const wordFrequency = (phrase) => {
//     let frequency = {}
//     words = phrase.split(' ')
//     for (const word of words){
//         console.log(word)
//         if(word in frequency){
//             frequency[word] += 1
//         }
//         else{
//             frequency[word] = 1
//         }
//     }
//     console.log(words)
//     return frequency
// }

// console.log(wordFrequency('lol what lol hello yo yo yo yo yo'))

// [1,2,3,4].map( number => console.log(number))

// const result = [1,2,3,4].map( number => number *2)
// console.log(result)

// const doubleMap = (numbers) => {
//     return numbers.map(number => number *2)
// }

// console.log(doubleMap([1,2,3]))

// const filter = (numbers, greaterThan) => {
//     let result = []
//     for(const number of numbers){
//         if(number > greaterThan){
//             result.push(number)
//         }
//     }
//     return result
// }

// console.log(filter([1,2,3,4,5],2))

// const num = [1,2,3,4,5,6]
// console.log(num.filter(num => num >=3))
// console.log(num.filter(num => num >3 || num < 2))

// const actors = [
//     {name: 'Jhonny', netWorth: 2000000},
//     {name: 'Amber', netWorth: 10},
//     {name: 'Matt', netWorth: 170000000},
//     {name: 'Brad', netWorth: 300000000},
//     {name: 'Leonardo', netWorth: 43000000}
// ]

// console.log(actors.reduce((a,b) => a +b.netWorth, 0))



// let result = actors.filter( actor => actor.netWorth >10)
// console.log(result)
// let names = result.map(actor => actor.name).join(', ')

// document.getElementById('first').innerHTML = `<h1>${names}</h1>`

// const sum = (a, b) => a + b
// const multiply = (a, b) => a * b

// const nums = [1,2,3,4,5]
// const result = nums.reduce(sum, 0)
// const result1 = nums.reduce(multiply, 1)

// console.log(result)
// console.log(result1)

// const randomFruit = (fruits) => {
//     const randomNumber = Math.floor(Math.random() * fruits.length)
//     return fruits[randomNumber]
// }

// const fruits = ['banana','apple','kiwi','mango']
// console.log(randomFruit(fruits))

// const randomCar = (cars) => {
//     const randomNumber = Math.floor(Math.random() * cars.length)
//     console.log(randomNumber)
//     return cars[randomNumber]
// }

// const cars = ['supra','bmw','mercedes','audi']
// console.log(randomCar(cars))

// const randomGame = (game) => {
//     const randomNumber = Math.floor(Math.random() * game.length)
//     return game[randomNumber]
// }

// const game = ['rock','paper','scissors']
// console.log(randomGame(game))

// const weatherScorer = (weather, weather2) => {
//     let score
//     if(weather == 'rainy' && weather2 == 'overcast'){
//         score = 2
//     }
//     else if(weather == 'sunny'){
//         score = -1
//     }
//     else if(weather == 'rainy'){
//         score = 1
//     }
//     else{
//         score = 0
//     }
//     return score
// }

// console.log(weatherScorer('rainy','overcast'))
// console.log(weatherScorer('rainy'))
