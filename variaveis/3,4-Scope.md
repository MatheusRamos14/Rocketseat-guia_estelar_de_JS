# Scope

* Escopo determina a visibilidade de alguma variável no JS

# Block statement
```js
// Vamos iniciar um bloco
{
    // Aqui dentro é um bloco e posso colocar qualquer código
} // Aqui fechamos o bloco
```

O bloco também criará um novo escopo. Chamamos de `block-scoped`

## var
```js
// var é global e poderá funcionar fora de um escopo de bloco
console.log('> Existe x antes de bloco?', x)

{
    var x = 0
}

console.log('> Existe x depois do bloco? ', x)
```

## let e const
```js
// const e let são locais e só funcionam no escopo onde foi criada
console.log('> Existe y antes do bloco? ', y)

{
    let y = 0
}

console.log('> Existe y depois do bloco? ', y)
```