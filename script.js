document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const response = document.getElementById("response");

    const API_URL = "https://script.google.com/macros/s/AKfycbwrTmZ54mOy1HwTXFb6xdBcT66gNtakN1sKkuj5pwlMGP3FJWnC91sUA33m8ON9vhop/exec"; // Ganti dengan URL Web App dari Google Apps Script

    function sendAnswer(answer) {
        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ answer: answer }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("Response saved:", data);
        })
        .catch((error) => {
            console.error("Error saving response:", error);
        });
    }

    yesBtn.addEventListener("click", () => {
        response.textContent = "Yay! I'm so happy! 💖";
        response.classList.remove("hidden");
        response.style.color = "#ff6b6b";

        sendAnswer("Yes");
    });

    noBtn.addEventListener("click", () => {
        response.textContent = "Oh no! Maybe someday... 🙁";
        response.classList.remove("hidden");
        response.style.color = "#555";

        sendAnswer("No");
    });
});
