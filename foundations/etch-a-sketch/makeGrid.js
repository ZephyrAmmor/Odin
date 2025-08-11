const container = document.querySelector('.container')
const gridSize = 16
for(let i = 0; i < gridSize; i++){
    for(let j = 0; j < gridSize; j ++){
        const aDiv = document.createElement('div')
        aDiv.classList.add('cell')
        container.appendChild(aDiv)
    }
}



const cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
    let randomRed = Math.floor(Math.random() * 256)
    let randomGreen = Math.floor(Math.random() * 256)   
    let randomBlue = Math.floor(Math.random() * 256)
    cell.dataset.alpha = 0.10
    cell.addEventListener('mouseover', (e) => {
        if(cell.style.background == 'white'){
            e.target.style.background = `rgba(${randomRed},${randomGreen}, ${randomBlue}, ${parseFloat(cell.dataset.alpha)})`
        }
        else{
            let newAlpha = parseFloat(cell.dataset.alpha) + 0.10
            cell.dataset.alpha = newAlpha
            e.target.style.background = `rgba(${randomRed},${randomGreen}, ${randomBlue}, ${parseFloat(cell.dataset.alpha)})`
        }
    })
});
