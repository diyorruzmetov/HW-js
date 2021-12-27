const board = document.querySelector('.board')

let number = 506

for (let i = 0; i < number; i++) {
    let div = document.createElement('div')

    div.addEventListener('mouseover', () => {
        div.style.background = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
        div.style.boxShadow = '0 0 2px'
    })

    div.addEventListener('mouseleave', () => {
        div.style.background = '#1f1c1c'
        div.style.boxShadow = '0 0 2px #000'
    })

    div.classList.add('box')

    board.appendChild(div)
} 