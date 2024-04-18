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
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        950: {
            slidesPerView: 2
        },
        1300: {
            slidesPerView: 3
        }
    }
})

const discountDivs = document.querySelectorAll('.discount_div')
const previewImage = document.getElementById('previewImage');
discountDivs.forEach((disc, index) => {
    disc.addEventListener('mouseover', () => {

        removeActiveClasses()
        
        disc.classList.add('active')
        const newImageSrc = disc.getAttribute('data-image')
        previewImage.src = newImageSrc
        
        previewImage.style.opacity = '1'
    })
    disc.addEventListener('mouseleave', () => {

        removeActiveClasses()
        
        if (index <= discountDivs.length) {
            discountDivs[0].classList.add('active')
            previewImage.src = '../assets/book-gyilkossag.png'
            previewImage.style.opacity = '1'
        }
        
    })
})

function removeActiveClasses() {
    discountDivs.forEach(disc => {
        disc.classList.remove('active')
    })
}

discountDivs[0].classList.add('active')
previewImage.src = '../assets/book-gyilkossag.png'

function toggleSearchBar() {
    const searchBar = document.getElementById("searchBar")
    searchBar.style.transform = "translate(-50%, -3%)"
    // searchBar.style.transform = "translate(-50%, -300%)"
}

function closeSearchBar() {
    const searchBar = document.getElementById("searchBar")
    searchBar.style.transform = "translate(-50%, -300%)"
}

const searchInput = document.querySelector('#searchInput')

searchInput.addEventListener('focus', async () => {
    const response = await fetch('../../booksJSON')
})