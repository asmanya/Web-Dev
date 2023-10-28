console.log('This is arrow function')

const harry = function(){
    console.log('This is the best person ever')
}

harry()
const harry1 = ()=>{
    console.log('This is the best person ever')
}
harry1()

const greet = function(){
    return 'good morning'
}
console.log(greet())

const greet1 = () =>'good morning';
console.log(greet1())

const love = () => 'I am so in love with you'
console.log(love())

const no = () => ({name: 'harry'})
console.log(no())

const input = (name, ending) => 'good morning ' + name + " "+ ending
console.log(input("mf", "bye"))