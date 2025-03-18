/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu=document.getElementById('nav-menu')
const hamberger=document.getElementById('hamberger')
const navLink=document.querySelectorAll('.nav-link')
hamberger.addEventListener('click',function(){
    navMenu.classList.toggle('left-[0]')
    hamberger.classList.toggle('ri-close-large-line')
})
navLink.forEach(link=>{
    link.addEventListener('click',()=>{
        navMenu.classList.toggle('left-[0]')
    hamberger.classList.toggle('ri-close-large-line')
    })
    
})
/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
  speed:800,
  spaceBetween:30,
  autoplay:{
delay:500,
disableOnInteraction: false
  },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      clickable:true
    },
    grabCursor:true,
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
  });

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/