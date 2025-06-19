// Gallery

const back = document.querySelector("#back");
const next = document.querySelector("#next");
const photos = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"];
let i=0;
next.addEventListener("click",() => {
    i++;
    if (i > photos.length-1) {
        i=0;
    }
    document.querySelector("#pictures").src=photos[i];
});
back.addEventListener("click", () => {
    i--;
    if (i < 0) {
        i=photos.length-1;
    }
    document.querySelector("#pictures").src=photos[i];
});

// Burger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));