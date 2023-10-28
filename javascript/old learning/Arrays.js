const names = ["asmanya","vinay","aman","aakarshit","sammyak","harish"];

// for loop
for(let i = 0; i<names.length; i++ ){
    console.log(names[i])
}

// For of loop
for(let name of names){
    console.log(name)
}

//For Each
names.forEach(function(name,index){
    console.log(name,index)
})

let student = ["s","h","i","v","a"];
console.log(student.join())
console.log(student.join(" "))
console.log(student.join(''))
console.log(student.join('_'))
student = student.join('_')

//split
console.log(student.split('_'))

let cities = [
    {name: 'Mumbai', population: 3274281},
    {name: 'Bengalore', population: 427281},
    {name: 'Delhi', population: 9874281},
    {name: 'Chennai', population: 1434381},
    {name: 'Lucknow', population: 1772123}
];

//filter
console.log(cities.filter(city =>{
    return city.population > 3000000
}))

//filter
console.log(cities.filter(city => city.population > 3000000))

//map
console.log(cities.map(city => city.population * 2))