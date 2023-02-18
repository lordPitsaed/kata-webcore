let brandsShowMoreButton = document.querySelector('.brands__wrapper__button');
let brandWrapper = document.querySelector('.brands__wrapper');
let swiperMainElem = document.querySelector('.brands');
let brandCards = document.querySelectorAll('.brand_card');

let buttonOpenMenu = document.querySelector('.button_open_menu');
let asideMenu = document.querySelector('.aside_menu');
let buttonCloseMenu = document.querySelector('.button-close-aside')

brandsShowMoreButton.addEventListener('click', () => {

    brandWrapper.classList.toggle('brands__wrapper--show_more')
    if (brandWrapper.classList.contains('brands__wrapper--show_more')) {
        brandsShowMoreButton.textContent = 'Скрыть'
        brandsShowMoreButton.classList.add('brands__wrapper__button--show-less');
    } else {
        brandsShowMoreButton.textContent = 'Показать всё'
        brandsShowMoreButton.classList.remove('brands__wrapper__button--show-less');
    }

})

buttonOpenMenu.addEventListener('click', () => {
    asideMenu.classList.toggle('aside_menu--show')
})

buttonCloseMenu.addEventListener('click', () => {
    asideMenu.classList.toggle('aside_menu--show')
})

function swiperDisable() {
    let swiper = new Swiper(".swiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    })

    console.log(window.innerWidth)

    if (window.innerWidth <= 425) {
        console.log('enabling swiper')
        swiperMainElem.classList.add('swiper')
        brandCards.forEach(element => {
            element.classList.add('swiper-slide');
        });
        brandWrapper.classList.add('swiper-wrapper');
    } else {
        console.log('deleting swiper')
        swiperMainElem.classList.remove('swiper');
        brandCards.forEach(element => {
            element.classList.remove('swiper-slide');
        });
        brandWrapper.classList.remove('swiper-wrapper');
    }

}
swiperDisable();

window.addEventListener('resize', () => {
    swiperDisable();
    console.log('resize ')
})