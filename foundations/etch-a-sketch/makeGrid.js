const container = document.querySelector('.container')
const gridSize = 16
for(let i = 0; i < gridSize; i++){
    for(let j = 0; j < gridSize; j ++){
        const aDiv = document.createElement('div')
        aDiv.classList.add('cell')
        container.appendChild(aDiv)
    }
}