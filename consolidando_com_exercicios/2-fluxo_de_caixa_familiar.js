/*  ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receita: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo 
*/

let caixaFamiliar = {
    receitas: [2500, 3200, 250.43, 360.45],
    despesas: [320.34, 128.45, 176.87, 1450]
}

function calculoDeSaldo(receitas_e_despesas) {
    let entrada = 0
    let saida = 0
    for (let dados in receitas_e_despesas) {
        for (let valores of receitas_e_despesas[dados]) {
            dados == 'receitas' ? entrada += valores : saida += valores
        }
    }
    let situacao = entrada - saida
    situacao > 0 ? situacao = `SALDO POSITIVO de R$${(entrada - saida).toFixed(2).replace('.', ',')}` : situacao = `SALDO NEGATIVO de R$${(entrada - saida).toFixed(2).replace('.', ',')}`
    return situacao
}

console.log(calculoDeSaldo(caixaFamiliar))