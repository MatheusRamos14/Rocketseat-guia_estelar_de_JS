// # Exercício

// 1. Declare uma variável de nome weight
let weight;

// 2. Que tipo de dado é a variável acima?
console.log('undefined')

/* 3. Delcare uma variável e atribua valores para cada um dos dados: 
      * name: String
      * age: Number (integer)
      * stars: Number (float)
      * isSubscribed: Boolean
*/
let name = 'Matheus'
let age = 17
let stars = 4.8
let isSubscribed = true

/*
    4. A variável student abaixo é de que tipo de dado?

    4.1 Atribua ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

console.log('Object')

let student = {
    name: 'Matheus',
    age: 17,
    weight: 47.89,
    stars: 4.8,
    isSubscribed: true
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

let students = [
    student
]

/*
    7. Coloque no console o valor da posição zero do Array acima.
*/

console.log(students[0])
/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

students.push(student1 = {
    name: 'Michele',
    age: 17,
    weight: 45.65,
    stars: 4.5,
    isSubscribed: false
})

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/

console.log('undefined')