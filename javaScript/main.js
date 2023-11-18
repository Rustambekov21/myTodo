const container = document.querySelector(".container")
const cards = document.querySelector(".cards")
const btn = document.querySelector(".header-btn")
const input = document.querySelector(".header-input")
const error = document.querySelector(".error")

btn.addEventListener("click", () => {
    if(!input.value) {
        error.textContent = "The table is not filled!"
    } else {
        error.style.display = "none"
        const card = document.createElement("div")
        card.classList.add("card")
        card.style.borderBottom = "2px solid #c9c9c9"
        
        const texts = document.createElement("div")
        texts.classList.add("texts")
        
        const checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        checkbox.classList.add("checkbox")
        checkbox.addEventListener("click", () => {
            checkbox.classList.toggle("true")
            if(checkbox.classList.contains("true")) {
                action.style.textDecoration = "line-through"
            } else{
                action.style.textDecoration = "none"
            }
        })
        
        const action = document.createElement("h2")
        action.textContent = input.value
        
        const cardBtn = document.createElement("button")
        cardBtn.textContent = "Remove"
        cardBtn.classList.add("card-btn")
        cardBtn.addEventListener("click", () => {
            // card.textContent = ""
            card.style.display = "none"
            card.style.borderBottom = "none"
        })
        
        input.value = ""
        
        texts.appendChild(checkbox)
        texts.appendChild(action)
        
        card.appendChild(texts)
        card.appendChild(cardBtn)
        
        cards.appendChild(error)
        cards.appendChild(card)
        
        container.appendChild(cards)
    }
})
