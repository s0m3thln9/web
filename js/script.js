let slider = document.querySelector(".slider");
let startLeft = 0;
let isTouch = false;

slider.addEventListener("mousedown", e => {
    startLeft = e.offsetX;
    isTouch = true;
});

document.addEventListener("mouseup", e => {
    isTouch = false;
});



slider.style.left = -2196 + "px";

slider.addEventListener("mousemove", e => {
    let left = parseInt(slider.style.left);
    console.log(left);
    if (isTouch === true && left > -1000000) {
        slider.style.left = left + e.offsetX - startLeft + "px";
        console.log(left);
    } 
    // else if (isTouch === true && left <= -2224 && left > -410) {
    //     left = -4;
    //     slider.style.left = left + e.offsetX - startLeft + "px";
    //     console.log(left);
    // } else if (isTouch === true && left <= -2224 && left <= -410) {
    //     left = -4;
    //     slider.style.left = left + e.offsetX - startLeft + "px";
    //     console.log(left);
    // }
});