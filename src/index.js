console.log("plswork")


//dom elements
const indexCardUl = document.querySelector("#index-cards")

const navBar = document.querySelector(".nav-bar")
const loginLi = document.querySelector("#login")
const profileBtn = document.querySelector("#profile")
const signupBtn = document.querySelector("#signup")
const newcardBtn = document.querySelector("#newcard")
const logoutBtn = document.querySelector("#logout")

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

// Event Listeners

// navBar.addEventListener("click", function(event) {
//     event.preventDefault()
//     if (event.target.matches("#login"))
//         console.log("clicked")
// })

loginLi.addEventListener("click", event => {
    event.preventDefault()
    console.log("login")

})

profileBtn.addEventListener("click", event => {
    event.preventDefault()
    console.log("My Profile")
    // when a user clicks on the profile button
    // the profile page of the user is displayed in the main
    // all of the cards of that user will be displayed on the page

    // when the user clicks the profile button
    // render each of the user's cards
    // slap them on the DOM
    
    // write a function to render the user's cards/show page inside the div#card-container
        // if card.user_id === user.id
        // render card(s) to page
    
})

signupBtn.addEventListener("click", event => {
    event.preventDefault()
    console.log("signup")
    
})

newcardBtn.addEventListener("click", event => {
    event.preventDefault()
    console.log("newcard")
    
})

logoutBtn.addEventListener("click", event => {
    event.preventDefault()
    console.log("logout")
    
})



// fetches

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

const getUser = id => {
    fetch(`http://localhost:3000/api/v1/users/${id}`)
    .then(r => r.json())
    .then(data => console.log(data))
}

// initialize

getUser(2)
getCard(2)
getAllCards()