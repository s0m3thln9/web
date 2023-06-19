let slider = document.querySelector(".slider");
let sliderItems = document.querySelectorAll(".slider__item");
sliderItems.forEach(item => {
    item.style.width = 346 + "px";
});
let gap = 24;
let startLeft = 0;
let isTouch = false;

slider.addEventListener("mousedown", e => {
    startLeft = e.offsetX;
    isTouch = true;
});

document.addEventListener("mouseup", e => {
    isTouch = false;
});

const sliderLength = sliderItems.length / 2 * (parseInt(sliderItems[0].style.width) + gap);
console.log(sliderLength);
slider.style.left = -sliderLength;

slider.addEventListener("mousemove", e => {
    if (isTouch === true) {
        let left = parseInt(slider.style.left);
        if (left <= -410 && left >= -2630) {
            slider.style.left = left + e.offsetX - startLeft + "px";
            console.log(left);
        } else if (left < -2630) {
            left = left + sliderLength;
            slider.style.left = left + e.offsetX - startLeft + "px";
            console.log(left);
        } else if (left > -410) {
            left = left - sliderLength;
            slider.style.left = left + e.offsetX - startLeft + "px";
            console.log(left);
        }
    }
});


// setInterval(() => {
//     if (isTouch === false) {
//         slider.style.left = parseInt(slider.style.left) - 1 + "px";
//         let left = parseInt(slider.style.left);
//         if (left < -2630) {
//             left = left + sliderLength;
//             slider.style.left = left - startLeft + "px";
//         } else if (left > -410) {
//             left = left - sliderLength;
//             slider.style.left = left - startLeft + "px";
//         }
//     }
// }, 15);