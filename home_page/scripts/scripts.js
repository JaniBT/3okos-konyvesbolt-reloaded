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

let index = 0

function slide() {
    const items = document.querySelectorAll('.recommend_book')
    const carouselWidth = document.querySelector('#book_wrapper').offsetWidth
    const listBtn = document.querySelector('.list_rightBtn')

    const totalWidth = 200 + 24
    const marginleft = -(totalWidth / carouselWidth * 100)

    console.log(marginleft)
    if (index < items.length - 3) {
        for (let i = index; i < index + 3; i++) {
            items[i].style.marginLeft = marginleft + '%'
            listBtn.innerHTML = `<i class="fa fa-angle-left"></i>`
        }
        index += 3
    } else {
        for (let i = 0; i < items.length; i++) {
            items[i].style.marginLeft = '0'
            listBtn.innerHTML = `<i class="fa fa-angle-right"></i>`
        }
        index = 0
    }
}