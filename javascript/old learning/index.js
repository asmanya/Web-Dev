//for loop

for (let i = 0; i < 10; i++) {
  console.log("Namaste World!");
}

for(let i = 50; i>4; i = i-5){
    console.log(i);
}

for(let i = 0; i <10; i++){
    if(i % 2 == 0)
    console.log(i);
}

// while loop

let i = 1;
while(i<10){
    console.log("Namaste")
    i++
}

let j = 0;

//do while loop

do{
    console.log("Yeah boi")
    j++
}
while(j<10)

//for in loop

//objects

let animal = {
    name : "Zebra",
    leg: 4
};

for(let key in animal){
    console.log(key, animal[key]);
}

//Arrays

let names = ["Rahul", "Neha", "Aman", "Rishab"]
for(let index in names){
    console.log(index, names[index])
}


//for of loop

for(let name of names){
    console.log(name)
}