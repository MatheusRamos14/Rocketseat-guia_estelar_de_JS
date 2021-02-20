// for...in

let person = {
    name: 'Matheus',
    age: 17,
    weight: 48.98,
}

for (let property in person) {
    console.log(property)
    console.log(person[property])
}