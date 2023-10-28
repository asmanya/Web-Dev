// class Car{
//     constructor(name, color, topSpeed){
//         this.name = name
//         this.color = color
//         this.topSpeed = topSpeed
//         this.currentSpeed = 0
//     }
//     zeroToSixty(){
//             setTimeout(()=>{
//             console.log('pHEW! That was fast!')
//             this.currentSpeed = 60
//             console.log(this.currentSpeed)
//         })
//     }
//     drive(){
//         this.currentSpeed += 10
//         console.log(`driving at ${this.currentSpeed} mph`)
//     }
//     brake(){
//         console.log('slowing down')
//         this.currentSpeed -= 10
//         console.log(`Current speed is ${ferrari.currentSpeed}`)
//     }
//     stop(){
//         console.log('came to screeching hault')
//         this.currentSpeed= 0
//         console.log(`Now speed is ${this.currentSpeed}`)
//     }
// }

// const ferrari = new Car('ferrari', 'red', 250)
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.brake()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.stop()

// const numbers = [1,2,3,4]
// numbers.push(5)
// console.log(typeof(numbers))
// console.log(numbers)

// Array.prototype.myPush = function(item){
//     this[this.length] = item
//     return this
// }

// const fruits = ['banana','apple','strawberry','pear','pineapple']
// fruits.myPush('yeah')
// fruits.myPush('nhi ara')
// console.log(fruits)

class Bank{
    constructor(balance){
        this.balance = balance
        console.log(`Your balance is $${this.balance}`)
    }
    deposit(amount){
       this.balance += amount
        console.log('deposited', `$${amount}`)
        console.log({balance: this.balance})
    }
    withdraw(amount){
        if(this.balance - amount <= 0){
            console.log(`You can not withdraw $${amount}. Your bank balance is $${this.balance}`)
            return
        }
        this.balance -= amount
        console.log('withdrew',`$${amount}` )
        console.log({balance: this.balance})
    }
}

const myBank = new Bank(100)
