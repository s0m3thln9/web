const sliderContainer = document.querySelector('.slider-container');
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = Array.from(document.querySelectorAll('.slider-item'));

sliderWrapper.innerHTML += sliderWrapper.innerHTML;

let isDown = false;
let startX;
let scrollLeft;
let isScrolling = false;
let lastScrollX = 0;
let scrollVelocity = 0;
let inertiaInterval;

sliderContainer.addEventListener('mousedown', (event) => {
  isDown = true;
  startX = event.pageX - sliderContainer.offsetLeft;
  scrollLeft = sliderContainer.scrollLeft;
  isScrolling = true;
  lastScrollX = event.pageX;
  sliderContainer.classList.add('scrolling');
  clearInterval(inertiaInterval);
});

sliderContainer.addEventListener('mouseleave', () => {
  isDown = false;
  isScrolling = false;
  sliderContainer.classList.remove('scrolling');
  startInertia();
});

sliderContainer.addEventListener('mouseup', () => {
  isDown = false;
  isScrolling = false;
  sliderContainer.classList.remove('scrolling');
  startInertia();
});

sliderContainer.addEventListener('mousemove', (event) => {
  if (!isDown) return;
  event.preventDefault();
  const x = event.pageX - sliderContainer.offsetLeft;
  const walk = x - startX;
  sliderContainer.scrollLeft = scrollLeft - walk;
  isScrolling = true;
  scrollVelocity = event.pageX - lastScrollX;
  lastScrollX = event.pageX;
});

sliderContainer.addEventListener('scroll', () => {
  if (sliderContainer.scrollLeft + sliderContainer.offsetWidth >= sliderWrapper.scrollWidth) {
    sliderContainer.scrollLeft = 0;
  } else if (sliderContainer.scrollLeft <= 0) {
    sliderContainer.scrollLeft = sliderWrapper.scrollWidth - sliderContainer.offsetWidth;
  }
<<<<<<< HEAD
});
=======

  if (!isScrolling) {
    startInertia();
  }
});

function startInertia() {
  clearInterval(inertiaInterval);
  if (Math.abs(scrollVelocity) < 0.5) return;

  inertiaInterval = setInterval(() => {
    sliderContainer.scrollLeft += scrollVelocity;
    scrollVelocity *= 0.95;
    if (Math.abs(scrollVelocity) < 0.5) {
      clearInterval(inertiaInterval);
      isScrolling = false;
      sliderContainer.classList.remove('scrolling');
    }
  }, 10);
}
>>>>>>> 17a91f3f3aae342d1f536c00e8223348b4fd44c9
