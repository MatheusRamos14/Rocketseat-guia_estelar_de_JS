// Function Hoisting

sayMyName()

function sayMyName() {
    console.log('Matheus')
} // Funções declaradas nesse método sofrem Hoisting

var say_my_name = function() {
    console.log('Matheus')
} // Funções declaradas em variáveis não sofrem Hoisting