console.log("plswork")


//dom elements
const indexCardUl = document.querySelector("#index-cards")


//render functions
// function renderAllCards() {
//     cardObj.forEach(renderOneCard)
// }
const renderAllCards = cardArray => {
    cardArray.forEach(cardObj => renderOneCard(cardObj))
}

const renderOneCard = cardObj => {
    const li = document.createElement('li')
    li.setAttribute("class", "card")
    li.innerHTML = `
                    <div class="content">
                        <h4>${cardObj.character}</h4>
                    </div>
                    <div>
                        <img src=${cardObj.image}>
                    </div>

                    <div>
                        <p class="quote">${cardObj.quote}</p>
                    </div>
    `
    indexCardUl.append(li)
}

//fetches
const getAllCards = () => {
    fetch('http://localhost:3000/api/v1/cards')
    .then(r => r.json())
    .then(cardArray => renderAllCards(cardArray))
}

const getCard = id => {
    fetch(`http://localhost:3000/api/v1/cards/${id}`)
    .then(r => r.json())
    .then(cardObj => renderOneCard(cardObj))
    //replace clog with renderOneCard(cardObj)
}

function getUser() {
    fetch('http://localhost:3000/api/v1/users/2')
    .then(r => r.json())
    .then(data => console.log(data))
}
getUser()
getCard(2)
getAllCards()