let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
console.log('test')
navlist.addEventListener('click',()=>{
    console.log('test')
})


document.querySelector('.toggle-btn').addEventListener ('click',()=> {
    console.log('addEventListener')
navlist.classList.toggle('nav-c')

}) 
   
  
window.onscroll =() => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
   
}
const sr = ScrollReveal ({
    distance: '40px',
    duration: 2600,
    reset: true,
})
sr.reveal('.home-text', {delay: 300, origin:'left'})
sr.reveal('.about,.skills, .myworks, .contact',{delay:100, origin:'bottom'})