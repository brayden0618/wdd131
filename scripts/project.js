document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
    const form = document.querySelector(".feedback-form");
    form.addEventListener("submit", function (event) {
        const game = document.querySelector('input[name="game"]:checked');
        const rating = document.querySelector('input[name="rating"]:checked');
        if (game && rating) {
            const confirmSubmission = confirm(`You have rated ${game.value} with ${rating.value} star(s)! Thank you for your submission.`);
            if (!confirmSubmission) {
                event.preventDefault(); 
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const visitCountKey = "visitCount";
    let visitCount = localStorage.getItem(visitCountKey);
    if (!visitCount) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }
    localStorage.setItem(visitCountKey, visitCount);
    const visitDisplay = document.createElement("p");
    visitDisplay.textContent = `You have visited this page ${visitCount} time(s).`;
    visitDisplay.style.fontSize = "1.2em";
    visitDisplay.style.fontStyle = "italic";
    document.body.appendChild(visitDisplay);
    const footer = document.querySelector("footer");
    footer.appendChild(visitDisplay);
    const boardGames = ["Dice Throne", "Settlers of Catan", "Uno"];
    const upperCaseGames = boardGames.map(game => game.toUpperCase());
    console.log("Uppercase Board Games:", upperCaseGames);
});