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

    const form = document.getElementsByTagName('form')
    const formData = new FormData(form)
    addNewBookToLibrary(...formData)
    form.reset()
    dialog.close()
})

//Get Books from Library and Display them
function displayBooks(){

    for(book of library){
        const tableRow = document.createElement('tr')
        const tableTitle = document.createElement('td')
        const tableAuthor = document.createElement('td')
        const tablePages = document.createElement('td')
        const tableRead = document.createElement('td')
        const tableDelBtn = document.createElement('td')
    }
}