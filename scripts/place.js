// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if the wind chill calculation is applicable for Metric or Imperial units
    if (temperature <= 10 && windSpeed > 4.8) {  // Metric units (°C and km/h)
        return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
    } else if (temperature <= 50 && windSpeed > 3) {  // Imperial units (°F and mph)
        return (35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
    } else {
        return "N/A";  // Wind chill not applicable
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Static temperature and wind speed data for testing, you can later replace these with dynamic values
    const temperature = 5;  // Temperature in °C (example)
    const windSpeed = 10;   // Wind speed in km/h (example)

    // Calculate the wind chill based on the given temperature and wind speed
    const windChill = calculateWindChill(temperature, windSpeed);

    // Set the data into the weather section dynamically
    document.querySelector('.weather-section ul').innerHTML = `
        <li><strong>Temperature:</strong> ${temperature}°C</li>
        <li><strong>Conditions:</strong> Clear</li>
        <li><strong>Wind:</strong> ${windSpeed} km/h</li>
        <li><strong>Wind Chill:</strong> ${windChill}°C</li>
    `;

    // Set current year and last modified date in the footer
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;
});
