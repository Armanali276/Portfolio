var sticky = document.querySelector('.sticky-wrapper');
window.addEventListener('scroll', function() {
    let scrollLength = window.pageYOffset;
    if (scrollLength > 0) {
        sticky.classList.add('sticky')
        console.log(scrollLength, document.documentElement.scrollHeight)
    }else {
        sticky.classList.remove('sticky')
    }
    if(scrollLength > 100) {
        sticky.classList.add('shrink')
    }else {
        sticky.classList.remove('shrink')
    }
})