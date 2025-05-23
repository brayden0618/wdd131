const currentYear = document.querySelector("#currentYear");
currentYear.innerHTML = new Date().getFullYear();
const pattern = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
if (
    Date.parse(document.lastModified) >
    (parseFloat(document.cookie.match(pattern)?.[1]) || 0)
) {
    document.cookie = `lastModified=${document.lastModified}`;
    const lastModified = document.querySelector("#lastModified");
    lastModified.innerHTML = `Last modified: ${document.lastModified}`;
}
function calculateWindChill() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const windSpeed = parseFloat(document.getElementById('windSpeed').value);
    const resultElement = document.getElementById('windChillResult');
    if (isNaN(temperature) || isNaN(windSpeed)) {
        resultElement.textContent = "Please enter valid numbers for both temperature and wind speed.";
        return;
    }
    if (temperature > 50 || windSpeed <= 3) {
        resultElement.textContent = `Wind chill does not apply. Actual temperature: ${temperature}°F.`;
        return;
    }
    const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * tempF * Math.pow(windSpeed, 0.16);
    resultElement.textContent = `Calculated Wind Chill: ${windChill.toFixed(2)}°F`;
}

