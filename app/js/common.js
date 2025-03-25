// Burger Menu
const body = document.querySelector("body");
const header = document.querySelector(".header");
const burgerMenu = document.querySelector(".header .header-button-menu");
const burgerBody = document.querySelector(".header .header-button-menu__body");


burgerMenu.addEventListener("click", (e) => {
  header.classList.toggle("header-menu-open");
  burgerBody.classList.toggle("active");
  body.classList.toggle("lock");
  e.stopPropagation();
});


$(".main-menu").clone().appendTo(".header-button-menu__body");




// Range Slider
const rangeInput = document.querySelector('.rangeslider__input');
const	rangeCount = document.querySelector('.info-banner__count');
let isRTL = document.documentElement.dir === 'rtl';

rangeInput.addEventListener('input', () => {
  rangeCount.textContent = rangeInput.value;

  const min = rangeInput.min
  const max = rangeInput.max
  const val = rangeInput.value
  let percentage = (val - min) * 100 / (max - min)
  if (isRTL) {
    percentage = (max - val) 
  }
  rangeInput.style.backgroundSize = percentage + '% 100%'
});