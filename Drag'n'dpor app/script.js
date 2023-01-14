const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

const dragover = (e) => {
    e.preventDefault()
}

const dragenter = (e) => {
    e.target.classList.add('hovered')
}

const dragleave = (e) => {
    e.target.classList.remove('hovered')
}

const dragdrop = (e) => {
    e.target.classList.remove('hovered')
    e.target.append(item)
    
}

placeholders.forEach((placeholder) => {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
})

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide'), 0
    })
    
}

function dragend(event) {
    event.target.className = 'item'
}