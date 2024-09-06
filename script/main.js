const sticky = document.querySelector('.sticky-wrapper');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sticky.classList.toggle('sticky', scrollY > 0);
    sticky.classList.toggle('shrink', scrollY > 100);
});

AOS.init();

Fancybox.bind('[data-fancybox="gallery"]', {}); 

$('.slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-text',
    infinite: true,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-arrow-right"></i></button>'
});
$('.slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    asNavFor: '.slider-img'
});
$('.slider-testimonials').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
})


let tabBtns = document.querySelectorAll('.tabs li');
let tabContents = document.querySelectorAll('.tabs-content .item');

tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let $this = e.target;
        let dataTab = $this.dataset.tab;
        tabBtns.forEach(allBtn => {
            allBtn.classList.remove('active')
        })
        $this.classList.add('active')
        tabContents.forEach(content => {
            content.style.display = 'none'
            if (content.dataset.tabcontent == dataTab) {
                content.style.display = 'block'
            }else if (dataTab == 'all') {
                content.style.display = 'block'
            }
        })
    })
});