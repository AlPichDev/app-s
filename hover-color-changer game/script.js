const board = document.getElementById('board')
const COUNT_OF_SQUARE = 500

const colors = ['#8432f0', '#eb1765', '#20f', '#00d0ff', '#00ffb3', '#00ff37', '#df0', '#eb6010']

const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

const setColor = (e) => {
    const color = getRandomColor()
    e.style.backgroundColor = color
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

const removeColor = (e) => {
    const color = getRandomColor()
    e.style.backgroundColor = '#222'
    e.style.boxShadow = '0 0 2px black'
}



for(let i = 0; i < COUNT_OF_SQUARE; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}