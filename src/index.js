// console.log("plswork")

//plans for today
//create forms
//set up my profile click function
//when clicked
//remove all cards from card container
//render cards where currentUserId === card.user_id
// change p tag with all cards .textContent = user.name eg bryn's cards/profile


// ********** DOM ELEMENTS **********

const allCardsUl = document.querySelector("#all-cards")

const userContainer = document.querySelector("#user-container")

const navBar = document.querySelector(".navBar")
const loginForm = document.querySelector("#login-form")
const profileBtn = document.querySelector("#profile")
const signupBtn = document.querySelector("#signup")
const newcardBtn = document.querySelector("#newcard")
const logoutBtn = document.querySelector("#logout")
const homeBtn = document.querySelector("#homepage")
const newCardForm = document.querySelector("#new-card-form")

const pageTitle = document.querySelector("#title")

const cardCollection = document.querySelector("#card-collection")

let currentUserId = null


// ********** RENDER FUNCTIONS **********

const renderUserCard = userCardObj => {
    const li = document.createElement('li')
    li.setAttribute("class", "card")
    li.innerHTML = `
        <div class="content">
            <h4>${userCardObj.character}</h4>
        </div>
        <div>
            <img src=${userCardObj.image}>
        </div>

        <div>
            <p class="quote">"${userCardObj.quote}"</p>
        </div>
    `
    allCardsUl.append(li)
}

const renderAllUsers = userArray => {
    console.log(userArray)
}

const renderUser = userObj => {
    console.log(userObj)
    const userDiv = document.createElement("div")
    userDiv.className = "user"
    userDiv.dataset.id = userObj.id

    userDiv.innerHTML = `
        <p id="name">${userObj.name} </p>
        <p id="age">${userObj.age} </p>
    `
    allCardsUl.innerHTML = ``
    userObj.cards.forEach(renderUserCard)
    userContainer.innerHTML = ``
    userContainer.append(userDiv)
}

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
            <p class="quote">"${cardObj.quote}"</p>
        </div>
    `
    allCardsUl.append(li)
}
//what do now
// on dom load get a page with users each user will be a p tag or h3 with an id equal to user id
// click on a p tag and then get request to get that specific user and slap it on the dom
// get rid of everything except home and log out
// add create new card to home page
// when someone signs in, save username as dataset id so that when new card is created
// it belongs to it
// if dataset id is not present on a new card, alert please sign in
// seed real cards
//signing in adds div with dataset id
//log out would remove that div and therefore dataset
//set up render for users cards

// ********** EVENT LISTENERS **********

newCardForm.addEventListener("submit", event => {
    event.preventDefault()
    console.log("plswork")
    event.target.reset()
})

loginForm.addEventListener("submit", event => {
    event.preventDefault()
    console.log("signed in")
    allCardsUl.innerHTML = ""
    pageTitle.innerHTML = ""
    pageTitle.innerText = "My Profile Page"



    renderUser
    getUser(3)
})

profileBtn.addEventListener("click", event => {
    event.preventDefault()
    console.log("My Profile")
    pageTitle.innerText = ""
    pageTitle.innerText = "My Profile Page"


    allCardsUl.innerHTML = ``

//    getUser(2)
    //write function outside to render user cards
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

homeBtn.addEventListener("click", event => {
    event.preventDefault()
    console.log("Home!")
    pageTitle.innerText = ""
    pageTitle.innerText = "Simpsons Card Collection"
    
    getAllCards()
})


// ********** FETCH REQUESTS **********

const getAllUsers = () => {
    fetch('http://localhost:3000/api/v1/users')
    .then(r => r.json())
    .then(userArray => renderAllUsers(userArray))
}

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
    .then(userObj => renderUser(userObj))
}

// ********** INITIALIZE **********

// getUser(2)
getCard(2)
getAllCards()
