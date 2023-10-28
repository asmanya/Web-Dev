const characters = [
    {
        name: 'Tarak Mehta',
        height: '172',
        mass: '53',
        eye_color: 'brown',
        gender: 'male'
    },
    {
        name: 'Jetha lal',
        height: '162',
        mass: '63',
        eye_color: 'black',
        gender: 'male'
    },
    {
        name: 'Babita ji',
        height: '167',
        mass: '47',
        eye_color: 'blue',
        gender: 'female'
    },
    {
        name: 'Krishnan Iyer',
        height: '168',
        mass: '60',
        eye_color: 'grey',
        gender: 'male'
    }
];

//Get an array of all names

const names = characters.map(ch => ch.name)
console.log(names); 

//Get an array of objects with just height and name properties

