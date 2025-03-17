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


/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/