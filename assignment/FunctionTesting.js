 // Add some code to get the user input

 function celsius () {
    let celsius = 0;
    console.log (`Celsius: ${celsius} C`);
    console.log(`Fahrenheit: ${celsiusToFahrenheit} F`);
    console.log(`Kelvin: ${celsiusToKelvin} K`);
}
//let celsius = function () {
    //console.log(`Celsius: ${celsius} C`);
    //console.log(`Fahrenheit: ${celsiusToFahrenheit} F`);
    //console.log(`Kelvin: ${celsiusToKelvin} K`); }

// Conversion Code
let celsiusToFahrenheit = celsius * 9/5 +32;
let celsiusToKelvin = celsius + 273;

// Print the results to the browser console
celsius();