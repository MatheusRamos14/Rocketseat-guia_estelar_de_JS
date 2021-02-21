/*  ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C...

    * de 90 para cima - A
    * entre 80-89     - B
    * entre 70-79     - C
    * entre 60-69     - D
    * menor que 60    - F

*/

//  Nota do aluno (aleatória)
let notaAluno = Math.floor(Math.random() * 100)

function sistemaDeNotas(nota) {
    let notaEmCaractere
    if (nota >= 90 && nota <= 100) {
        notaEmCaractere = `${nota} - Nota A`
    } else if (89 >= nota  && nota >= 80) {
        notaEmCaractere = `${nota} - Nota B`
    } else if (79 >= nota && nota >= 70) {
        notaEmCaractere = `${nota} - Nota C`
    } else if (69 >= nota && nota >= 60) {
        notaEmCaractere = `${nota} - Nota D`
    } else if (nota < 60) {
        notaEmCaractere = `${nota} - Nota F`
    } else {
        notaEmCaractere = 'Nota inválida'
    }
    return notaEmCaractere
}

console.log(sistemaDeNotas(notaAluno))