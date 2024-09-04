const sticky = document.querySelector('.sticky-wrapper');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sticky.classList.toggle('sticky', scrollY > 0);
    sticky.classList.toggle('shrink', scrollY > 100);
});

AOS.init();