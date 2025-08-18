let library = []

// Open dialog box on add new book click
const addNewBook = document.getElementById('add-new-book')
const dialog = document.querySelector('dialog')
addNewBook.addEventListener('click',() =>{
    dialog.show()
})

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages, 
    this.read =read,
    this.id = crypto.randomUUID()
}
// Create new Book and push it to the library
function addNewBookToLibrary(title, author, pages, read){
    newBook = new Book(title, author, pages, Boolean(read))
    library.push(newBook)
}

const form = document.querySelector('form')
form.addEventListener('submit', (event) =>{
    event.preventDefault()

    const form = document.querySelector('form')
    const formData = new FormData(form)
    addNewBookToLibrary(...formData)
    form.reset()
    dialog.close()
    displayBooks()
})

//Get Books from Library and Display them
function displayBooks(){
    const table = document.querySelector('.table')
    for(book of library){
        const tableRow = document.createElement('tr')
        
        //Iterate over each property of a Book
        for(let key in book){
            const tableData = document.createElement('td')
            tableData.textContent = `${book[key]}`
            tableRow.appendChild(tableData)
        }
        table.appendChild(tableRow)
    }
}