window.addEventListener('scroll', function(){
    var header = document.querySelector('.header_bg');
    header.classList.toggle('stycky',window.scrollY > 200)
})