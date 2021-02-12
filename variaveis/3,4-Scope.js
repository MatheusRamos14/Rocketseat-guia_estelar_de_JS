console.log('> Existe x antes de bloco?', x)
// var é global e local.
// var sofre Hoisting.

{
    var x = 0
}

console.log('> Existe x depois do bloco? ', x)

console.log('> Existe y antes do bloco? ', y)
// const e let são locais e só funcionam no escopo onde foram criadas
// Não sofrem Hoisting

{
    // let y = 0
}

console.log('> Existe y depois do bloco? ', y)