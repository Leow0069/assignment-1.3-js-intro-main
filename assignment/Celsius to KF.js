let celsius = null; // Add some code to get the user input
let fahr = null;
let kelvin = null;

// Conversion Code
const celsiusToFahrenheit = celsius * 9/5 +32;
const celsiusToKelvin = celsius + 273.15;

// Print the results to the browser console


if (typeof celsius === "number") {
    console.log(`Celsius: ${celsius} C`);
    console.log(`Fahrenheit: ${celsiusToFahrenheit} F`);
    console.log(`Kelvin: ${celsiusToKelvin} K`);
}

else {
    console.log("how to solve this!!")
}