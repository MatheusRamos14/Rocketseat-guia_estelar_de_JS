/*  ### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F -32) * 5/9
    
    F = C * 9/5 + 32
*/

let actualTemp = '37°C'

function convertTemperature(temperature) {
    let temp = temperature[0] + temperature[1]
    let convertedTemp;
    if (temperature.toUpperCase().includes('C')) {
        convertedTemp = `${(Number(temp) * 9/5 + 32).toFixed(1)}°F`
    } else if (temperature.toUpperCase().includes('F')) {
        convertedTemp = `${((Number(temp) -32) * 5/9).toFixed(1)}°C`
    } else {
        throw new Error('Grau não identificado.')
    }
    return convertedTemp
}

try {
    console.log(convertTemperature(actualTemp))
    console.log(convertTemperature('35f'))
    console.log(convertTemperature('56j'))
    console.log(convertTemperature('58c'))

} catch (error) {
    console.log(error)
}