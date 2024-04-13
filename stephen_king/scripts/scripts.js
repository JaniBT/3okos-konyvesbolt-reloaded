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


const carousel_cards = document.querySelector('.carousel-cards')
const carousel_images = ["../assets/Top10Books/MrMercedes_10.jpg", "../assets/Top10Books/IT_9.jpg", "../assets/Top10Books/Christine_8.jpg", "../assets/Top10Books/PetSematary_7.jpg", "../assets/Top10Books/FourPastMidnight_6.jpg", "../assets/Top10Books/SalemsLot_5.jpg", "../assets/Top10Books/TheStand_4.jpg", "../assets/Top10Books/TheEyesOfTheDragon_3.jpg", "../assets/Top10Books/TheGunslinger_2.jpg", "../assets/Top10Books/TheShining_1.jpg"]
const aria_labels = ["MrMercedes", "IT", "Christine", "Pet Sematary", "4 Past Midnight", "'Salem's Lot", "The Stand", "Eyes of Dragon", "The Gunslinger", "The Shining"]

for (let i = 0; i < carousel_images.length; i++) {
    let carousel_card =
    `
        <div class="carousel_card">
            <img class="topBooks_Img" src="${carousel_images[i]}" alt="${aria_labels[i] + " c. Könyv borítója"}" aria-label="${aria_labels[i] + " c. Könyv borítója"}">
            <h3 class="topBooks_Title"><strong>#${carousel_images.length - i}</strong> ${aria_labels[i]}</h3>
        </div>
    `
    carousel_cards.innerHTML += carousel_card
}
let index = 0

function showCard(index, direction) {
    const cards = document.querySelectorAll('.carousel_card');
    cards.forEach((card, i) => {
        card.style.transform = i === index ? 'translate3d(0, 0, 0)' : direction === 'right' ? `translate3d(0, 0, 200px)` : `translate3d(0, 0, 200px)`;
        card.style.opacity = i === index ? '1' : '0';
    });
}

document.querySelector('.leftBtn').addEventListener('click', () => {
    index = index > 0 ? index - 1 : carousel_images.length - 1
    showCard(index, 'left')
})

document.querySelector('.rightBtn').addEventListener('click', () => {
    index = index < carousel_images.length - 1 ? index + 1 : 0
    showCard(index, 'right')
})

window.addEventListener('keydown', (e) => {
    e.preventDefault()
    if (e.key === "ArrowRight") {
        index = index < carousel_images.length - 1 ? index + 1 : 0
        showCard(index, 'right')
    } 
    else if (e.key === "ArrowLeft") {
        index = index > 0 ? index - 1 : carousel_images.length - 1
        showCard(index, 'left')
    }
})

showCard(index, '')

const footerYear = document.querySelector('#fullYear')
const date = new Date()
footerYear.textContent = date.getFullYear()