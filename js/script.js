let slider = document.querySelector(".slider");
let sliderCover = document.querySelector(".slider__cover");
let sliderItems = document.querySelectorAll(".slider__item");


console.log(slider.offsetWidth);
let gap = 24;
const sliderLength = (slider.offsetWidth + gap) / 2;
slider.style.left = -sliderLength + gap + "px";
let left = parseInt(slider.style.left);
let isTouch = false;
let offset = 20;
let velocity = 0;
let previousOffset = 0;
let velocityInterval;


const mousedownHandler = (e) => {

}

const mouseupHandler = (e) => {
    
}

const mouseleaveHandler = (e) => {
    
}

const mousemoveHandler = (e) => {
    
}

const documentMouseupHandler = (e) => {
    
}




const autoScroll = () => {
    
};


const velocityFunction = () => {
    
};



sliderCover.addEventListener("mousedown", mousedownHandler);
sliderCover.addEventListener("mouseup", mouseupHandler);
sliderCover.addEventListener("mouseleave", mouseleaveHandler);
sliderCover.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("mouseup", documentMouseupHandler);