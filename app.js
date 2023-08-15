const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤'
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤'
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤'
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥'
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
}
]
function drawPeople() {
    locations.forEach((location) => {
        //console.log(location) //log the location we are in
        let inLocation = people.filter((person) => person.location == location) //creates a filtered array
        let personPicture = inLocation.map((person) => person.picture)
        //console.log(personPicture) // log all the people in a location
        document.getElementById(location).innerText = personPicture.join(', ') //applies above code to html with the matching id
    })
}

let bats = 0

function attack(emoji) {
    console.log("People", people)
    people.forEach((person) => {
        if ((person.location == emoji) && (person.name != hunter)) {
            person.picture = '🦇'
            bats = people.filter(p => p.picture == '🦇').length
        } else if (person.location == emoji && bats == 11 && person.name == hunter) {
            person.picture = '🦇'
            gameOver()
        } else if (person.location == emoji) {
            window.alert("You have been slain by the hunter")
            gameOver()
        }
    })
    console.log(bats, 'bats')
    move()
    drawPeople()
}

function gameOver() {
    let turned = people.filter(people => people.picture == '🦇')
    console.log(turned)
    if (turned.length == people.length) {
        window.alert("Game Over, you win!")
    } else {
        dawnReduce()
    }
}

function move() {
    people.forEach((person) => {
        let randomIndex = Math.floor(Math.random() * locations.length)
        let newLocation = locations[randomIndex]
        person.location = newLocation
    })
}

let dawn = 10

function dawnReduce() {
    dawn -= 1
    if (dawn == 0) {
        window.alert("The Sun has risen, we have perished")
    }
}
let hunter = ''
function randomHunter() {
    let randomIndex = Math.floor(Math.random() * people.length)
    hunter = people[randomIndex].name
}

randomHunter()
drawPeople()
console.log(hunter)
console.log(bats)