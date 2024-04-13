document.addEventListener('DOMContentLoaded', function() {
    const splide = new Splide('.splide')
    splide.mount()
})

window.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
      e.preventDefault();
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: 'smooth'
      })
    }
})

const element = document.getElementById('navbarID')
const icondiv = document.createElement('div')
icondiv.innerHTML = `<h3>Paginae Fascinantes</h3><img src="../../assets/Stephen_King_Icon.png">`

window.addEventListener('scroll', function() {
    if (window.scrollY > window.innerHeight - 200) {
        element.classList.remove('navbar')
        element.classList.add('newNavbar')
        if (icondiv.parentNode !== element) {
            element.appendChild(icondiv)
        }
    } else {
        element.classList.remove('newNavbar')
        element.classList.add('navbar')
        if (icondiv.parentNode === element) {
            element.removeChild(icondiv)
        }
    }
})

const scrollToTopBtn = document.querySelector('#scrollToTopButton')

window.onscroll = function() {
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
        scrollToTopBtn.style.display = "block"
    } else {
        scrollToTopBtn.style.display = "none"
    }
}

scrollToTopBtn.onclick = function() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}