/* ================= TYPING EFFECT ================= */
document.addEventListener("DOMContentLoaded", () => {
    const texts = [
        "Novice Developer",
        "Web Designer",
        "Desain Grafis"
    ];

    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    const typingElement = document.getElementById("typing");
    if (!typingElement) return;

    function typingEffect() {
        if (count === texts.length) {
            count = 0;
        }

        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        typingElement.textContent = letter;

        if (letter.length === currentText.length) {
            setTimeout(() => {
                index = 0;
                count++;
            }, 1500);
        }

        setTimeout(typingEffect, 120);
    }

    typingEffect();



/* ================= SCROLL REVEAL ================= */
const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

fadeElements.forEach(el => observer.observe(el));

/* ================= HAMBURGER MENU ================= */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
});