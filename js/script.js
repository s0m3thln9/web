let slider = document.querySelector(".slider");
slider.style.left = 400 + "px";
let startX;
let isUserTouching = false;
let left;
let items = [
    '<div class="slider__item"><p class="dd">1</p></div>',
    '<div class="slider__item"><p class="dd">2</p></div>',
    '<div class="slider__item"><p class="dd">3</p></div>',
    '<div class="slider__item"><p class="dd">4</p></div>',
    '<div class="slider__item"><p class="dd">5</p></div>',
    '<div class="slider__item"><p class="dd">6</p></div>',
    '<div class="slider__item"><p class="dd">7</p></div>',
    '<div class="slider__item"><p class="dd">8</p></div>',
]
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
    if (startX && isUserTouching === true) {
        slider.style.left = left + e.clientX - startX + "px";
    }
    if (+slider.style.left.substring(0, slider.style.left.length - 2) < 300) {
        
        //sliderItems[sliderItems.length] = sliderItems[0];
        //sliderItems[0].remove();
        const sliderItemsArray = Array.from(sliderItems); // Преобразование NodeList в массив
        const firstItem = sliderItemsArray.shift(); // Удаление первого элемента массива и сохранение его
        sliderItemsArray.push(firstItem); // Добавление удаленного элемента в конец массива
        slider.insertAdjacentHTML('beforeend', sliderItemsArray[0])
}});
