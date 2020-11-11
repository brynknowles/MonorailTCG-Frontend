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
            <p class="quote">${userCardObj.quote}</p>
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
        <p>${userObj.name} </p>
        <p>${userObj.age} </p>
    `
    allCardsUl.innerHTML = ``
    userObj.cards.forEach(renderUserCard)
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
            <p class="quote">${cardObj.quote}</p>
        </div>
    `
    allCardsUl.append(li)
}

// ********** EVENT LISTENERS **********

//user types in email and submits
//if email matches any users emails, currentUserId = that user id
// then in our event listener, we can call getUser(currentUserId)
loginForm.addEventListener("submit", event => {
    event.preventDefault()
    pageTitle.innerText = ""
    pageTitle.innerText = "My Profile Page"

    //const email = event.target.email.value 
    // if (event.target.matches(userObj.email)) {
    //     console.log("success!")
    // }
    //render that user's profile

    // let clicked = false;
    //   // Will only start if clicked is false
    // if (!clicked) {
    // // Set clicked to true
    // clicked = true;

    // // Do your processing here
    // alert("You're already logged in!");

    // // Re-enable after processing if you want
    // // clicked = false;
    // }

    renderUser
    getUser(3)
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
