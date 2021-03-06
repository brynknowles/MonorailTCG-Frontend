// console.log("plswork")



// what do now - Thursday
// on dom load get a page with users each user will be a p tag or h3 with an id equal to user id
// click on a p tag and then get request to get that specific user and slap it on the dom
// get rid of everything except home and log out
// add create new card to home page
// when someone signs in, save username as dataset id so that when new card is created
// it belongs to it
// if dataset id is not present on a new card, alert please sign in
// seed real cards
// signing in adds div with dataset id
// log out would remove that div and therefore dataset
// set up render for users cards
// delete buttons

// ********** DOM ELEMENTS **********

const allCardsUl = document.querySelector("#all-cards")

const userContainer = document.querySelector("#user-container")

const navBar = document.querySelector(".navBar")

const homeBtn = document.querySelector("#homepage")
const logoutBtn = document.querySelector("#logout")

const newCardForm = document.querySelector("#new-card-form")

const pageTitle = document.querySelector("#title")

const cardCollection = document.querySelector("#card-collection")

// let currentUserId = null


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

// we need to add the button div and button element inside this render function for edit/update
const renderOneCard = cardObj => {
    const card = document.createElement('li')
    card.dataset.id = cardObj.id
    
    card.setAttribute("class", "card")
    card.innerHTML = `
        <div class="content">

            <h4 class="card-name">${cardObj.character}</h4>
            <img class="card-image" src=${cardObj.image}>
            <p class="quote">"${cardObj.quote}"</p>
                        <button class="delete-button" type="button">X</button>


        </div>
    `
    allCardsUl.append(card)
}

// ********** EVENT HANDLERS **********

// we need to create a handler for a click event on the update/edit button here
// it will include a fetch PATCH cards/id request
// it will also include an edit card form

function handleCharacterListClick(event) {
    if(event.target.matches(".delete-button")) {
        const button = event.target
        const card = button.closest(".card")
        const id = card.dataset.id

            fetch(`http://localhost:3000/api/v1/cards/${id}`, {
                method: 'DELETE',
            })
            .then(r => r.json())
            .then(data => console.log(data))
        card.remove() 

    } else if (event.target.matches(".card-name")) {
        console.log(event.target.innerText)
        const h2 = event.target
        const name = event.target.innerText
        const card = h2.closest(".card")
        const id = card.dataset.id
        console.log(id)
        fetch(`http://localhost:3000/api/v1/cards/${id}/reverse`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name
            })
        })
        .then(r => r.json())
        .then(data => {
            // h2.innerText = reversedName
            h2.innerText = data.name
        })
    }
}

// ********** EVENT LISTENERS **********

// we need to create an event listener that takes in the arguement of the event handler for the update/edit 

allCardsUl.addEventListener("click", handleCharacterListClick)




newCardForm.addEventListener("submit", event => {
    event.preventDefault()
    const newCardObj = {
        character: event.target.character.value,
        image: event.target.imageUrl.value,
        quote: event.target.quote.value,
        user_id: 12,
    }    

    fetch('http://localhost:3000/api/v1/cards', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCardObj)
    })
    .then(r => r.json())
    .then(newObj => console.log(newObj))

    renderOneCard(newCardObj)
    // debugger
    event.target.reset()
})

// loginForm.addEventListener("submit", event => {
//     event.preventDefault()
//     console.log("signed in")
//     allCardsUl.innerHTML = ""
//     pageTitle.innerHTML = ""
//     pageTitle.innerText = "My Profile Page"



//     renderUser
//     getUser(3)
// })

// profileBtn.addEventListener("click", event => {
//     event.preventDefault()
//     console.log("My Profile")
//     pageTitle.innerText = ""
//     pageTitle.innerText = "My Profile Page"


//     allCardsUl.innerHTML = ``

// //    getUser(2)
//     //write function outside to render user cards
// })


// logoutBtn.addEventListener("click", event => {
//     event.preventDefault()
//     console.log("logout")
    
// })

// homeBtn.addEventListener("click", event => {
//     event.preventDefault()
//     console.log("Home!")
//     pageTitle.innerText = ""
//     pageTitle.innerText = "Simpsons Card Collection"
    
//     getAllCards()
// })


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
getAllCards()

// else if(event.target.matches(".edit-button")) {
//     const button = event.target
//     const card = button.closest(".card")
//     const id = card.dataset.id
//     console.log("clicked")
//     newCardForm.id = "edit-form"
//     const editForm = document.querySelector("#edit-form")
//     // let cardImg = button.closest('.card-image')
//     // editForm.imageUrl.value = cardImg.src
//     // console.log(cardImg)
//     fetch(`http://localhost:3000/api/v1/cards/${id}`)
//     .then(r => r.json())
//     .then(cardObj => {
//         editForm.imageUrl.value = cardObj.image
//         editForm.character.value = cardObj.character
//         editForm.quote.value = cardObj.quote

//     })
//     .then(()=> {
//         editForm.addEventListener("submit", event => {
//             event.preventDefault()
//             const newCardObj = {
//                 character: event.target.character.value,
//                 image: event.target.imageUrl.value,
//                 quote: event.target.quote.value,
//                 // user_id: 12
//             }    
        
//             fetch(`http://localhost:3000/api/v1/cards/${id}`, {
//                 method: 'PATCH',
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(newCardObj)
//             })
//             .then(r => r.json())
//             .then(newObj => console.log(newObj))
        

//             // debugger
//             // event.target.reset()
//         })
//     })
//         newCardForm.id = "new-card-for