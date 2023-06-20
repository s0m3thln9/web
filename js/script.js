let slider = document.querySelector(".slider");
let sliderCover = document.querySelector(".slider__cover");
let sliderItems = document.querySelectorAll(".slider__item");

sliderItems.forEach(item => {
    item.style.width = 346 + "px";
});

let gap = 24;
let isTouch = false;
let offcet = 20;
let velocity = 0;
let innerVelocity = 0;
let momentum = 0.99;
let previousOffcet = 0;

const sliderLength = sliderItems.length / 2 * (parseInt(sliderItems[0].style.width) + gap);
slider.style.left = -sliderLength + gap + "px";

document.addEventListener("mouseup", e => {
    isTouch = false;
    if (Math.abs(velocity) !== 0) {
        innerVelocity = velocity;
        console.log(`innerVelocity = ${innerVelocity}`);
        setInterval(velocityInterval, 20);
        if(Math.abs(innerVelocity) < 1) {
            setInterval(velocityInterval, 20);
        }
    }
});

sliderCover.addEventListener("mousedown", e => {
    isTouch = true;
    previousOffcet = 0;
    clearInterval(autoScroll);
    clearInterval(velocityInterval);
    innerVelocity = 0;
    previousOffcet = 0;
});


sliderCover.addEventListener("mousemove", e => {
    if (isTouch === true) {
        let left = parseInt(slider.style.left);
        if(left < -offcet && left > -sliderLength - offcet) {
            slider.style.left = left - previousOffcet + e.offsetX  + "px";
            //console.log(slider.style.left);
        } else if(left >= -offcet) {
            left = left - sliderLength;
            slider.style.left = left - previousOffcet + e.offsetX  + "px";
            //console.log(slider.style.left);
        } else if(left <= -sliderLength - offcet) {
            left = left + sliderLength;
            slider.style.left = left - previousOffcet + e.offsetX  + "px";
            //console.log(slider.style.left);
        }
    }
    velocity = (-previousOffcet + e.offsetX) * 3;
    previousOffcet = e.offsetX;
});

const autoScroll = () => {
    if (isTouch === false) {
        slider.style.left = parseInt(slider.style.left) - 1 + "px";
        let left = parseInt(slider.style.left);
        //console.log(left);
        if (left < -sliderLength - offcet) {
            left = left + sliderLength;
            slider.style.left = left + "px";
        } else if (left > -offcet) {
            left = left - sliderLength;
            slider.style.left = left + "px";
        }
    }
}

const velocityInterval = () => {
    innerVelocity *= 0.99;
    slider.style.left = parseInt(slider.style.left) + innerVelocity + "px";
    console.log(`slider.style.left + innerVelocity = ${slider.style.left}, innerVelocity = ${innerVelocity}`);
    clearInterval(autoScroll);
    if (Math.abs(innerVelocity) < 2) {
        console.log("bye");
        setInterval(autoScroll, 20);
        clearInterval(velocityInterval);
        previousOffcet = 0;
    }
}

setInterval(autoScroll, 20);