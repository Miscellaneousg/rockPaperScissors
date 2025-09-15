const buttons = Array.from(document.querySelectorAll("button"));
const container = document.querySelector(".home");
const circle = document.querySelector("#circle");

const updateCircleGeometry = (button)=>{

    const buttonRect = button.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const relativeX = buttonRect.left - containerRect.left;
    const relativeY = buttonRect.top - containerRect.top;

    // Position the circle
    circle.style.left = relativeX + 'px';
    circle.style.top = relativeY + 'px';
}

window.addEventListener('load', ()=>updateCircleGeometry(buttons[0]));
window.addEventListener('resize',()=>updateCircleGeometry(buttons[0]));

buttons[0].addEventListener("click",()=>{
    updateCircleGeometry(buttons[0]);
    circle.classList.toggle("ripple");
    circle.classList.toggle("expanding");
    setTimeout(() => {
        // circle.classList.toggle("expanding");
        container.style.display="none";
        container.nextElementSibling.style.display="flex";
    },700);
});

buttons[1].addEventListener("click",()=>{
    container.style.display="flex";
    container.nextElementSibling.style.display="none";
    updateCircleGeometry(buttons[0]);
    circle.classList.toggle("expanding");
    setTimeout(() => {
        circle.classList.toggle("ripple");
    },800);
});

buttons.forEach((button)=>{
    button.addEventListener("mouseenter",()=>{
    button.classList.toggle("glow");
    updateCircleGeometry();
    });
    button.addEventListener("mouseleave",()=>{
    button.classList.toggle("glow");
    updateCircleGeometry();
    });
});

    // container.style.display="none";
    // container.nextElementSibling.style.display="flex";





