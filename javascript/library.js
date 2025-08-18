let library = []

// Open dialog box on add new book click
const addNewBook = document.getElementById('add-new-book')
const dialog = document.querySelector('dialog')
addNewBook.addEventListener('click',() =>{
    dialog.show()
})

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
}
// Create new Book and push it to the library
function addNewBookToLibrary(title, author, pages, read){
    newBook = new Book(title, author, pages, Boolean(read))
    console.log(newBook)
    Object.defineProperty(newBook, 'id', {
        value: crypto.randomUUID()
    })
    Object.defineProperty(newBook, 'showRead', {
        value: function(){
            if(read)
                return 'Already'
            return 'Not Yet'
        },
        enumerable: false,
        writable: true,
        configurable: true
    })
    library.push(newBook)
    console.table(library)
}

const form = document.querySelector('form')
form.addEventListener('submit', (event) =>{
    event.preventDefault()

    const form = document.querySelector('form')
    const formData = new FormData(form)
    
    addNewBookToLibrary(formData.get('title'), formData.get('author'), formData.get('pages'), formData.get('read'))
    form.reset()
    dialog.close()
    displayBooks()
})

//Get Books from Library and Display them
function displayBooks(){
    const table = document.querySelector('.table')
    table.textContent = ''
    const headerRow = document.createElement('tr')
    const titleHeader = document.createElement('td')
    const authorHeader = document.createElement('td')
    const pagesHeader = document.createElement('td')
    const readHeader = document.createElement('td')
    titleHeader.textContent = 'Title'
    authorHeader.textContent = 'Author'
    pagesHeader.textContent = 'Pages'
    readHeader.textContent = 'Read'
    headerRow.appendChild(titleHeader)
    headerRow.appendChild(authorHeader)
    headerRow.appendChild(pagesHeader)
    headerRow.appendChild(readHeader)
    table.appendChild(headerRow)

    for(book of library){
        const tableRow = document.createElement('tr')
        
        //Iterate over each property of a Book
        for(let key in book){
            const tableData = document.createElement('td')
            if(key == 'read'){
                tableData.textContent = book.showRead()
                tableRow.appendChild(tableData)
                continue;
            }
            tableData.textContent = `${book[key]}`
            tableRow.appendChild(tableData)
        }
        table.appendChild(tableRow)
    }
}