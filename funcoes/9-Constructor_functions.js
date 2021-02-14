/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name, idade) {
    this.name = name
    this.idade = idade
    this.walk = function() {
        return "Andou"
    }
}

const matheus = new Person('Matheus', 17)

const michele = new Person('Michele', 17)

console.log(matheus)
console.log(michele)