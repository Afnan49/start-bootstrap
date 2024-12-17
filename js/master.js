var nav=document.querySelector(".navbar")
window.addEventListener('scroll',()=>{
    window.pageYOffset > 0
      ? nav.classList.add('sticky')
      : nav.classList.remove('sticky');
})