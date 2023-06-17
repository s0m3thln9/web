let slider = document.querySelector(".slider");
slider.style.left = 0;
let startX;
let isUserTouching = false;

slider.addEventListener("mousedown", (e) => {
    startX = e.clientX;
    isUserTouching = true;
});

document.addEventListener("mouseup", (e) => {
   isUserTouching = false;
});


document.addEventListener("mousemove", (e) => {
    if (startX && isUserTouching === true) {
        // console.log(slider.style.left);
        let delta = +slider.style.left.substring(0, slider.style.left.length - 2)
        slider.style.left = delta + e.clientX - startX + "px";
    }
});