const noBtn = document.querySelector(".btn2"); // I changed this from 'btn2' to 'noBtn'
const container = document.querySelector(".lowerContainer");

noBtn.addEventListener("mouseenter", () => {
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});