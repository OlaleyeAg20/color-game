const selectButtons = document.querySelectorAll('.selectBtns')
const colorContainer = document.getElementById('colorContainer')
const resetBtn = document.getElementById('resetBtn')
const scoreContainer = document.getElementById('score')
const clicksContainer = document.getElementById('clicks')
const gameStatus = document.getElementById('gameStatus')

const colorArray = ['#DB4437', '#4285F4', '#34A853', '#FFA500', '#4B0082', '#722F37']
let score = 0;

function pickRandomNumber(){
    const randomNumber = Math.floor(Math.random() * colorArray.length)

    return randomNumber
}

let pickRanRandomColor = colorArray[pickRandomNumber()]

function renderRandomColor(){
    colorContainer.style.background = pickRanRandomColor
}

renderRandomColor()

selectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        gameStatus.style.display = 'block'
        
        if(btn.value == pickRanRandomColor){
            gameStatus.textContent = 'You are Correct!'
            gameStatus.style.background = '#34A853'
            score++
            scoreContainer.textContent = score
        } else {
            gameStatus.textContent = 'You are Wrong!'
            gameStatus.style.background = '#DB4437'
            gameStatus.style.color = '#F1F1F1'
        }

        const randomColor = colorArray[pickRandomNumber()]
        pickRanRandomColor = randomColor
        renderRandomColor()
    })
})

resetBtn.addEventListener('click', () => {
    score = 0
    scoreContainer.textContent = score
    gameStatus.style.display = 'none'
    renderRandomColor()
})