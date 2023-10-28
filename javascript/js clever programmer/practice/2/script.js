const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

// get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)


const calculateBill = () => {
    // get bill from user input & convert it into a number
    const bill = Number(billInput.value)
    
    // get the tip from user & convert it into a percentage 
    const tippercentage = Number(tipInput.value)/100

    //get the total tip amount
    const tipAmount = bill*tippercentage

    // calculate the total ( tipAmount + bill)
    const total = tipAmount + bill

    // calculate the per person total
    const perPersonTotal = total / numberOfPeople
    
    // update the perPersonTotalDiv on DOM & show it to user
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}


const decreasePeople = () => {
    // gaurd clause
    // if amount is 1 orless simply return
    // a.k.a you can't decrease the number og people than 1
    if(numberOfPeople <= 1){
        alert("You can't have less than 1 person")
        return
    }

    // decrease the amount of people
    numberOfPeople -= 1

    //update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

    // calculate the bill based on the new number of people
    calculateBill()
}


const increasePeople = () => {
    // increment the amount of people
    numberOfPeople += 1

    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

    // calculate the bill based on the new number of people
    calculateBill()
}