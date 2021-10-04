const section = document.querySelector('section')
// const playerLivesCount = document.querySelector('span')
const time = document.querySelector('span')
// let playerLives = 6
let timelimit = 120  


// playerLivesCount.textContent = playerLives

const getData = () => [
    {imgSrc: "./images/kurama.jpg", name: "kurama"},
    {imgSrc: "./images/initialD.jpg", name: "initialD"},
    {imgSrc: "./images/royboy.jpg", name: "royboy"},
    {imgSrc: "./images/demon.jpg", name: "demon"},
    {imgSrc: "./images/itachi.jpg", name: "itachi"},
    {imgSrc: "./images/jujutsu.jpg", name: "jujutsu"},
    {imgSrc: "./images/L.jpg", name: "L"},
    {imgSrc: "./images/L2.jpg", name: "L2"},
    {imgSrc: "./images/fruitsBasket.jpg", name: "fruitsBasket"},
    {imgSrc: "./images/transmutation.jpg", name: "transmutation"},

    {imgSrc: "./images/kurama.jpg", name: "kurama"},
    {imgSrc: "./images/initialD.jpg", name: "initialD"},
    {imgSrc: "./images/royboy.jpg", name: "royboy"},
    {imgSrc: "./images/demon.jpg", name: "demon"},
    {imgSrc: "./images/itachi.jpg", name: "itachi"},
    {imgSrc: "./images/jujutsu.jpg", name: "jujutsu"},
    {imgSrc: "./images/L.jpg", name: "L"},
    {imgSrc: "./images/L2.jpg", name: "L2"},
    {imgSrc: "./images/fruitsBasket.jpg", name: "fruitsBasket"},
    {imgSrc: "./images/transmutation.jpg", name: "transmutation"},
]

const randomize = () => {
    const cardData = getData()
    cardData.sort(() => Math.random() - 0.5)
    return cardData
}

const cardGenerator = () => {
    const cardData = randomize()

    // const cards = document.querySelectorAll(".card")

    cardData.forEach((item) => {
        const card = document.createElement("div")
        const face = document.createElement("img")
        const back = document.createElement("div")
    
        card.classList = 'card'
        face.classList = 'face'
        back.classList = 'back'
        
        face.src = item.imgSrc
        card.setAttribute('name', item.name)
        // cards[index].setAttribute('name', item.name)

        section.appendChild(card)
        card.appendChild(face)
        card.appendChild(back)

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard')
            checkCards(e)
        })
    })
}

function startCountdown(seconds) {
    let counter = seconds;
      
    const interval = setInterval(() => {
      time.textContent = counter
      counter--;
        
      if (counter < 0 ) {
        window.alert("Time is up, try again")
        restart("Play again?")
        counter = timelimit
      }
    }, 1000);
}
startCountdown(timelimit)

const checkCards = (e) => {
    console.log(e)
    const clickedCard = e.target
    clickedCard.classList.add('flipped')
    const flippedCards = document.querySelectorAll('.flipped')
    const toggleCard = document.querySelectorAll('.toggleCard')

    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            console.log('match')
            flippedCards.forEach(card => {
                card.classList.remove('flipped')
                card.style.pointerEvents = 'none'

            })
        } 
        else{
            console.log('wrong')
            flippedCards.forEach(card => {
                card.classList.remove('flipped')
                setTimeout(() => card.classList.remove('toggleCard'), 1000)
            })
        }
    }
    if(toggleCard.length === 20){
        restart("Play Again?")
        window.alert("You Won")
        location.reload()
    }
}

const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll('.face')
    let cards = document.querySelectorAll('.card')
    section.style.pointerEvents = 'none'
    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard')
        
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all'
            faces[index].src = item.imgSrc
            cards[index].setAttribute('name', item.name)
            section.style.pointerEvents = 'all'
        }, 1000)
    })
    setTimeout(() => window.alert(text), 100)
}

cardGenerator()