const fullYearSpan = document.querySelector('#fullYear')
const date = new Date()
fullYearSpan.innerHTML = date.getFullYear()

function openDropdown(x) {
    x.classList.toggle('change')
    document.getElementById('dropdown-menu').classList.toggle('show')
}

const buttons = document.querySelectorAll('[data-carousel-button]')

function carouselImageChanging(button) {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const carousel = button.closest('[data-carousel]')
    const slides = carousel.querySelector('[data-slides]')
    
    const activeSlide = carousel.querySelector('[data-active]')
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active

    const indicators = carousel.querySelectorAll('[data-indicator]')
    indicators.forEach((indicator, index) => {
        if (index === newIndex) {
            indicator.dataset.active = true
        } else {
            delete indicator.dataset.active
        }
    })
}

function autoChangeSlide() {
    const carousel = document.querySelector('[data-carousel]')
    const nextButton = carousel.querySelector('[data-carousel-button="next"]')
    setInterval(() => {
        carouselImageChanging(nextButton)
    }, 8000)
}

autoChangeSlide();

buttons.forEach(button => {
    button.addEventListener('click', () => {
        carouselImageChanging(button)
    })
})

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,

    pagination: {
        el: '.swiper-pagination'
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
})

const discountDivs = document.querySelectorAll('.discount_div')
const previewImage = document.getElementById('previewImage');
discountDivs.forEach((disc, index) => {
    disc.addEventListener('mouseover', () => {
        removeActiveClasses()

        disc.classList.add('active')

        const newImageSrc = disc.getAttribute('data-image');
        previewImage.src = newImageSrc;
    })
    disc.addEventListener('mouseleave', () => {
        removeActiveClasses()

        if (index === discountDivs.length - discountDivs.length || index === discountDivs.length - 3 || index === discountDivs.length - 2 || index === discountDivs.length - 1) {
            discountDivs[0].classList.add('active')
            previewImage.src = '../assets/book-gyilkossag.png'
        }
        
    })
})

function removeActiveClasses() {
    discountDivs.forEach(disc => {
        disc.classList.remove('active')
    })
}

discountDivs[0].classList.add('active')