function CookingMaggi(Maggi , cup , tapli){
    console.log("Your maggie will be ready in " + 2 * Maggi + " minutes. The ingredients used are " + cup + " cups of water and " + tapli + " pan." )
}

CookingMaggi(3,6,1);


let bread1 = prompt("Which bread would you liketo have :- ");
let veggies1 = prompt("What are your favourite veggies");
let sauce1 = prompt("Which sauce would you like to have :- ");

function makesandwich(bread, veggies, sauce){
    let sandwich = bread + " bread " + veggies + " " + sauce + "sandwich is ready";
    return sandwich;
}

let vegsandwich = makesandwich(bread1, veggies1, sauce1);
console.log(vegsandwich);