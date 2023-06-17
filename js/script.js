let slider = document.querySelector(".slider");
slider.style.left = 400 + "px";
let startX;
let isUserTouching = false;
let left;

let sliderItems = document.querySelectorAll(".slider__item");

console.log(sliderItems);

slider.addEventListener("mousedown", (e) => {
    if (e.target.className !== 'dd') {
        left = +slider.style.left.substring(0, slider.style.left.length - 2);
        startX = e.clientX;
        isUserTouching = true;
    }
});

document.addEventListener("mouseup", (e) => {
   isUserTouching = false;
});


document.addEventListener("mousemove", (e) => {
    console.log(left);
    if (startX && isUserTouching === true) {
        slider.style.left = left + e.clientX - startX + "px";
    }
    if (left < 300) {
        sliderItems[0].remove();
    }
});
