const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  speed: 800,
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  type: 'progressbar',

  keyboard: {
    enabled : true
  },
  // autoplay: {
  //   delay: 3000,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: true
  // }
});
const modalBtn = document.querySelector(".call-btn");
const modalsBtn = document.querySelector(".call-button");
const offerModalBtn = document.querySelector(".offer__call-btn");
const closeBtn = document.querySelector(".modal__dialog--close");
const burgerBtn = document.querySelector(".burger");



modalBtn.addEventListener("click", function (){
    document.querySelector(".modal").classList.toggle("modal-active");
      document.querySelector(".header__logo").classList.toggle("header__logo--mobile");
       document.querySelector(".header-logo").classList.toggle("logo-mobile");
         document.querySelector(".header__nav").classList.toggle("attr-mobile");
});
modalsBtn.addEventListener("click", function (){
    document.querySelector(".modal").classList.toggle("modal-active");
    document.querySelector(".header__logo").classList.toggle("header__logo--mobile");
    document.querySelector(".header-logo").classList.toggle("logo-mobile");
    document.querySelector(".header__nav").classList.toggle("attr-mobile");
});
offerModalBtn.addEventListener("click", function (){
    document.querySelector(".modal").classList.toggle("modal-active");
    document.querySelector(".header__logo").classList.toggle("header__logo--mobile");
    document.querySelector(".header-logo").classList.toggle("logo-mobile");
    document.querySelector(".header__nav").classList.toggle("attr-mobile");
});
closeBtn.addEventListener("click", function (){
    document.querySelector(".modal").classList.remove("modal-active");
    document.querySelector(".header__logo").classList.toggle("header__logo--mobile");
     document.querySelector(".header-logo").classList.toggle("logo-mobile");
    document.querySelector(".header__nav").classList.toggle("attr-mobile");


});
burgerBtn.addEventListener("click", function (){
    document.querySelector(".burger").classList.toggle("burger--active");
    document.querySelector(".nav-menu").classList.toggle("nav-menu--active");
    document.querySelector(".header__nav--menu").classList.toggle("header__nav--active");
    document.querySelector(".call-btn").classList.toggle("call-btn--active");
});


let screenWindows = screen.width;
let block = document.querySelector(".footer__wrapp");
let elem1 = document.querySelector(".footer__links")
let elem2 = document.querySelector(".footer__time")
  if (screenWindows <= 1155) {
    let wrap = document.createElement("p")
    block.insertBefore(wrap, elem2)    
    wrap.append(elem1)
    wrap.appendChild(elem2)
  }
let screenW = screen.width;
let block1 = document.querySelector(".header__nav--menu");
let elem = document.querySelector(".call-btn")
  if (screenW <= 400) {
    block1.append(elem) 
  }