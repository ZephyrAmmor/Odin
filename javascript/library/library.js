let library = []
const container = document.querySelector('.container')

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
Object.defineProperty(Book.prototype, 'toggle', {
        value: function(){
            if(this.read)
                this.read = false
            else
                this.read = true
        },
        enumerable:false,
        writable: true,
        configurable: true,
    })
Object.defineProperty(Book.prototype, 'showRead', {
    value: function(){
        if(this.read)
            return 'Already'
        return 'Not Yet'
    },
    enumerable: false,
    writable: true,
    configurable: true
})

// Create new Book and push it to the library
function addNewBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, Boolean(read))
    Object.defineProperty(newBook, 'id', {
        value: crypto.randomUUID()
    })
    library.push(newBook)
    displayBook(newBook)
}
function displayBook(newBook){
   
    const card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('id', newBook.id)
    for(let key in newBook){
            const item = document.createElement('div')
            item.classList.add('item')
            if(key == 'read'){
                const readToggleBtn = document.createElement('button')
                readToggleBtn.textContent = newBook.showRead()
                readToggleBtn.classList.add('read-status')
                readToggleBtn.dataset.bookId = newBook.id
                item.appendChild(readToggleBtn)
                card.appendChild(item)
                continue;
            }
            item.textContent = `${newBook[key]}`
            card.appendChild(item)
        }
        const delBtn = document.createElement('button')
        delBtn.textContent = 'Del'
        delBtn.classList.add('del')
        delBtn.dataset.bookId = newBook.id

        const delData = document.createElement('div')
        delData.appendChild(delBtn)

        card.appendChild(delData)
        container.appendChild(card)
    
}

const form = document.querySelector('form')
form.addEventListener('submit', (event) =>{
    event.preventDefault()

    const form = document.querySelector('form')
    const formData = new FormData(form)
    
    addNewBookToLibrary(formData.get('title'), formData.get('author'), formData.get('pages'), formData.get('read'))
    form.reset()
    dialog.close()
})

//Get Books from Library and Display them


container.addEventListener('click', (e) =>{
    if(e.target.classList.contains('read-status')){
        const bookToToggle = library.filter(item => item.id === e.target.dataset.bookId)
        bookToToggle[0].toggle()
        e.target.textContent = bookToToggle[0].showRead()
    }
    else if(e.target.classList.contains('del')){
        const indexOfBook = library.findIndex(item => item.id === e.target.dataset.bookId)
        library.splice(indexOfBook, 1)
        const rowToDelete = document.getElementById(e.target.dataset.bookId)
        container.removeChild(rowToDelete)
    }
})