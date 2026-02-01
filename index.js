const noBtn = document.querySelector(".btn2"); 
const yesBtn = document.querySelector(".btn1");
const container = document.querySelector(".lowerContainer");
const innerContainer = document.querySelector(".innerContainer");
const afterYesElements = document.querySelectorAll(".afterYes");
const beforeYesElements = document.querySelectorAll(".beforeYes");
const lowerContainer = document.querySelectorAll(".lowerContainer");

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

yesBtn.addEventListener("click", ()=>{
    innerContainer.classList.add("show-letter");
    beforeYesElements.forEach((e)=>{
        e.classList.add("none");
    });
    afterYesElements.forEach((e)=>{
        e.classList.remove("none");
    });
    
} )


