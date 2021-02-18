/*
    Type conversion (typecasting) vs Type coersion
*/

/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log( NaN ? 'verdadeiro' : 'false')

/* 
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log('0' ? 'verdadeiro' : 'falso')