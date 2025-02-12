const buttonHeight= 45;
const buttonWidth= 100;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight  - buttonHeight;

window.addEventListener('DOMContentLoaded', ()=> {
    const button = document.getElementById('button');

    button.addEventListener("mouseover", () => {
        console.log("clicked");
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    })

    button.addEventListener("click", () => {
        console.log("clicked");
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    })
});