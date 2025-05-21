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
    const temperature = parseFloat(document.getElementById("temperature").value);
    const windSpeed = parseFloat(document.getElementById("windSpeed").value);
    if (temperature <= 50 && windSpeed > 3) {
        const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        document.getElementById("windChillResult").innerText = `Wind Chill: ${windChill.toFixed(2)}°F`;        
    } else {
        document.getElementById("windChillResult").innerText = "Wind Chill: N/A";
    }
}
