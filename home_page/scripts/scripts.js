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

    setInterval(() => {
        newIndex += 1
    }, 10000)

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

buttons.forEach(button => {
    button.addEventListener('click', () => {
        carouselImageChanging(button)
    })
})
