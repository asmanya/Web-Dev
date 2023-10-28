function greet(){
    console.log('good morning');
}
greet();


const you = function(){
    console.log('you are amazing');
};
you();


const arrow = ()=> console.log('you are arrow');
arrow();


const nice = (name, gender) => console.log(`good day ${name}, you are ${gender}`);
nice('asmanya','male');


const yes = function(yes = 'yes', no = 'no'){
    console.log(`is it a ${yes} or a ${no}`)
}
yes()
yes('yes','no')
yes('dog','cat')


const calcArea = function(radius){
    return 3.14 * radius**2
}
const a5 = calcArea(5)
console.log(a5)


const calcArea1 = radius => 3.14 * radius**2
console.log(calcArea1(2))


const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i<products.length; i++){
        total += products[i] + products[i] * tax
    }
    return total;
}
console.log(bill([10,12,15],0.2))


const bill2 = (products, tax) =>{
    let total = 0;
    for( let i = 0; i<products.length; i++){
        total += products[i] + products[i] * tax
    }
    return total
}
console.log(bill2([1,2,3,4],0.3))


const name = 'shawn';
let resultName = name.toUpperCase();
console.log(resultName);


let people = ['mario','luigi', 'light', 'shawn', 'ryuk']
people.forEach(function(person){
    console.log(`how are you ${person}`)
})


let people1 = ['mario1','luigi1', 'light1', 'shawn1', 'ryuk1']
people1.forEach(person =>{
    console.log(`how are you ${person}`)
})

const logPerson = (person , index) =>{
    console.log(`${index} - hello ${person}`)
}
people1.forEach(logPerson)
people.forEach(logPerson)


const ul = document.querySelector('.people')
let peopleHTML = ['asmanya','asmanya1', 'asmanya2', 'asmanya3', 'asmanya4']
 let html = ''
 peopleHTML.forEach(person =>{
    html += `<li style="color: purple">${person}</li>`
 })
 console.log(html)
 ul.innerHTML = html;