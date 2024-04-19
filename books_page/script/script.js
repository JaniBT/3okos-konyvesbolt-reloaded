//
function openDropdown(x) {
  x.classList.toggle("change")
  document.getElementById("dropdown-menu").classList.toggle("show")
}
//

//
function toStock() {
  alert("Jelenleg fejlesztés alatt! Kérjük szíves türelmét.")
}
//

//
let firstBtnClick = true

function toggleText() {
  let x = document.getElementsByClassName("full-description")
  if (firstBtnClick) {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.toggle("show")
      x[i].style.display = "block"
    }
    firstBtnClick = false
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

//
const resultDiv = document.querySelector('#renderId')

function toggleSearchBar() {
    const searchBar = document.getElementById("searchBar")
    searchBar.style.transform = "translate(-50%, -3%)"
}

function closeSearchBar() {
    resultDiv.innerHTML = ""
    const searchBar = document.getElementById("searchBar")
    searchBar.style.transform = "translate(-50%, -300%)"
}

const searchInput = document.querySelector('#searchInput')

async function renderBooks(data) {
    // Home_Page: bookDatas.hrefHome
    // Books_Page: bookDatas.hrefBooks
    let state = ``
    for (const bookDatas of data) {
        state += 
        `
            <li>
                <a href="${bookDatas.hrefBooks}">
                    <div class="book_listItems">
                        <div>
                            <h4>${bookDatas.name}</h4>
                            <p>${bookDatas.author}</p>
                        </div>
                        <div>
                            <p>${bookDatas.release}</p>
                        </div>
                    </div>
                </a>
            </li>
        `
    }

    return state
}

async function fetchData() {
    const response = await fetch('https://janibt.github.io/3okos-konyvesbolt-reloaded/booksJSON/books.json')
    const data = await response.json()

    return data
}

let storedBooks = undefined

window.onload = async () => {
    const result = await fetchData()
    storedBooks = result
}

searchInput.addEventListener('focus', async () => {

    let state = `<ul class="allBooks">${await renderBooks(storedBooks)}</ul>`

    resultDiv.innerHTML += state
    document.addEventListener('click', (event) => {
        if (!document.querySelector('#searchBar').contains(event.target)) {
            resultDiv.innerHTML = ""
        }
    })
})

function search() {
    let input, filter, ul, li, h4, i, txtValue
    input = document.getElementById('searchInput')
    filter = input.value.toUpperCase()
    ul = document.querySelector(".allBooks")
    li = ul.getElementsByTagName('li')
    
    for (i = 0; i < li.length; i++) {
        h4 = li[i].getElementsByTagName("h4")[0]
        txtValue = h4.textContent || h4.innerText
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""
        } else {
            li[i].style.display = "none"
        }
    }
}