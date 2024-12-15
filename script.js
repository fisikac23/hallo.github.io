document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const response = document.getElementById("response");

    yesBtn.addEventListener("click", () => {
        response.textContent = "Yay! I'm so happy! 💖";
        response.classList.remove("hidden");
        response.style.color = "#ff6b6b";
    });

    noBtn.addEventListener("click", () => {
        response.textContent = "Oh no! Maybe someday... 🙁";
        response.classList.remove("hidden");
        response.style.color = "#555";
    });
});
