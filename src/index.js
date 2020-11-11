console.log("plswork")

//plans for today
//create forms
//set up my profile click function
//when clicked
//remove all cards from card container
//render cards where currentUserId === card.user_id
// change p tag with all cards .textContent = user.name eg bryn's cards/profile

//dom elements
const indexCardUl = document.querySelector("#index-cards")

const navBar = document.querySelector(".nav-bar")
const loginLi = document.querySelector("#login")
const profileBtn = document.querySelector("#profile")
const signupBtn = document.querySelector("#signup")
const newcardBtn = document.querySelector("#newcard")
const logoutBtn = document.querySelector("#logout")
const cardContainer = document.querySelector("#card-container")
const profileDiv = document.querySelector("#profile-div")
const loginForm = document.querySelector("#login-form")

let currentUserId = null

//render functions
// function renderAllCards() {
//     cardObj.forEach(renderOneCard)
// }
const renderAllCards = cardArray => {
    cardArray.forEach(cardObj => renderOneCard(cardObj))


}
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


    indexCardUl.append(li)
}

const renderAllUsers = userArray => {
    userArray.forEach(renderUser(userObj))
}

const renderUser = userObj => {
    // console.log(userObj)
    profileDiv.innerHTML = `
        <p>${userObj.name} </p>
        <p>${userObj.age} </p>
    `
    indexCardUl.innerHTML = ``
    userObj.cards.forEach(renderUserCard)
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

//change login to have a form textarea under it
//user types in email and submits
//if email matches any users emails, currentUserId = that user id
// then in our event listener, we can call getUser(currentUserId)

loginForm.addEventListener("submit", event => {
    event.preventDefault()
    // debugger
    console.log("login")
    //const email = event.target.email.value 
    //if email.matches userObj.email
    //render that user's profile
    // const userObj = 
    getAllUsers()
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
    indexCardUl.innerHTML = ``

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

//fetch all users
//

// fetches
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

// initialize

// getUser(2)
getCard(2)
getAllCards()
