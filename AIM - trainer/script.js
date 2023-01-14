const startBtn = document.getElementById('start')
const screens = document.querySelectorAll('.screen')
const timeList = document.getElementById('time-list')
const timeEl = document.getElementById('time')
const board = document.getElementById('board')

const colors = ['red', 'blue', 'green', 'purple', 'yellow']

let score = 0

const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}

const createRandomCircle = () => {
    const circle = document.createElement('div')

    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    const color = getRandomNumber(0, colors.length - 1)


    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = colors[color]

    board.append(circle)
}

const setTime = (value) => {
    timeEl.innerHTML = `00:${value}`
}

const finishGame = () => {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}

const decreaseTime = () => {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }

}

const startGame = () => {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

let time = 0

board.addEventListener('click', (e) => {
    if(e.target.classList.contains('circle')) {
        score++
        e.target.remove()
        createRandomCircle()

    }
})

startBtn.addEventListener('click', (e) => {
    e.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})