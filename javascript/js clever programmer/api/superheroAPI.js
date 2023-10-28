// Reference URL - https://superheroapi.com/api/access-token/character-id

const SUPERHERO_TOKEN = '10223569763528853'
const BASE_URL = `https://superheroapi.com/api/php/${SUPERHERO_TOKEN}`

const getSuperHero = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => console.log(json))
}

getSuperHero(20)

document.querySelector('body').innerHTML += 'goodbye'

const img = `https://www.superherodb.com/pictures2/portraits/10/100/1390.jpg`

document.querySelector('body').innerHTML += `<img src="${img} height = 200 width = 200/'>`