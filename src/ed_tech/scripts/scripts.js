// swiper top
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// swiper top

// menu bar
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li')
//burger
  burger.addEventListener('click', () =>{
    nav.classList.toggle('nav-active');
//burger
//animate links
navLinks.forEach((link, index)=> {
  if(link.style.animation){
    link.style.animation='';
  }
  else{
  link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
  }
});
//toggle
burger.classList.toggle('toggle');
});


  //animate links
}

navSlide();
// menu bar
// mobile respoinsive buttons

// mobile respoinsive buttons