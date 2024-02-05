// Lights in background

let c = init("canvas"),
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight),
    count = 90;

//initiation

class firefly{
    constructor(){
    this.x = Math.random()*w;
    this.y = Math.random()*h;
    this.s = Math.random()*2.5;
    this.ang = Math.random()*2*Math.PI;
    this.v = this.s*this.s/3.5;
    }
    move(){
    this.x += this.v*Math.cos(this.ang);
    this.y += this.v*Math.sin(this.ang);
    this.ang += Math.random()*20*Math.PI/180-10*Math.PI/180;
    }
    show(){
    c.beginPath();
    c.arc(this.x,this.y,this.s,0,2*Math.PI);
    c.fillStyle="blanchedalmond";
    c.fill();
    }
}

let f = [];

function draw() {
    if(f.length < count){
    for(let j = 0; j < 10; j++){
    f.push(new firefly());
    }
    }

  //animation

    for(let i = 0; i < f.length; i++){
    f[i].move();
    f[i].show();
    if(f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h){
    f.splice(i,1);
    }
    }
}

function init(elemid) {
    let canvas = document.getElementById(elemid),
        c = canvas.getContext("2d"),
        w = (canvas.width = window.innerWidth),
        h = (canvas.height = window.innerHeight);
    c.fillStyle = "rgba(30,30,30,1)";
    c.fillRect(0, 0, w, h);
    return c;
}

window.requestAnimFrame = (function() {
    return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
    window.setTimeout(callback);
    }
    );
});

function loop() {
    window.requestAnimFrame(loop);
    c.clearRect(0, 0, w, h);
    draw();
}

window.addEventListener("resize", function() {
    (w = canvas.width = window.innerWidth),
    (h = canvas.height = window.innerHeight);
    loop();
});

loop();
setInterval(loop, 3000 / 90);

// Burger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Animation for skills

AOS.init({
    duration: 1200,
});


//Footer to Top

const goTop = document.querySelector('.back-to-top');
goTop.addEventListener('click', backToTop);

function backToTop() {
    if (window.pageYOffset > 0) {
    window.scrollBy(0, -30); //in brackets: scroll speed; the lower the number the lower speed of the scroll 
    setTimeout(backToTop, 0); // to scroll 30px back to top each milisecond
    }
};

