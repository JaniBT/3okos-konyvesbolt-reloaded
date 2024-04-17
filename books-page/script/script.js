
/* Navbar */

function openDropdown(x) {
    x.classList.toggle('change')
    document.getElementById('dropdown-menu').classList.toggle('show')
}
/* **Navbar** */

function toStock(){
    alert("Jelenleg fejlesztés alatt! Kérjük szíves türelmét.")
}

/* display/hide content */
let firstBtnClick = true

function toggleText() {
    let x = document.getElementsByClassName("full-description")
    if (firstBtnClick) {
        for (let i = 0; i < x.length; i++) {
            x[i].classList.toggle("show")
            x[i].style.display = "block"
        }
        firstBtnClick = false;
    } else {
        for (let i = 0; i < x.length; i++) {
            if (x[i].style.display === "none") {
                x[i].style.display = "block"
            } else {
                x[i].style.display = "none"
            }
        }
    }
}
/* **display/hide content** */