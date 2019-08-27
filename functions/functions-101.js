let connvertFahrenheitToCelsius = function(fahrenheit){
    let celsius = (fahrenheit - 32) / 1.8
    return celsius
}

let _32 = connvertFahrenheitToCelsius(32)
let _68 = connvertFahrenheitToCelsius(68)

console.log('Celsius: ' + _32.toFixed(2))
console.log('Celsius: ' + _68.toFixed(2))
