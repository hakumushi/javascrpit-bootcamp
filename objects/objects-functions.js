let convertFahrenheit = function(fahrenheit){
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) / 1.8,
        kelvin: ((fahrenheit - 32) / 1.8) + 273.15
    }
}

let temperatures = convertFahrenheit(74)
console.log(`Fahrenheit: ${temperatures.fahrenheit} Celsius: ${temperatures.celsius} Kelvin: ${temperatures.kelvin}`)
