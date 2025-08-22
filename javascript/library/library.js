let library = []
const container = document.querySelector('.container')

// Open dialog box on add new book click
const addNewBook = document.getElementById('add-new-book')
const dialog = document.querySelector('dialog')
addNewBook.addEventListener('click',() =>{
    dialog.show()
})
class Book{

    constructor (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
}
    toggle(){
            if(this.read)
                this.read = false
            else
                this.read = true
    }
    showRead(){
        if(this.read)
            return 'Already'
        return 'Not Yet'
    }
}
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
    const labels = document.createElement('div')
    const title = document.createElement('div')
    const author = document.createElement('div')
    const pages = document.createElement('div')
    const read = document.createElement('div')
    title.textContent =  'Title  :'
    author.textContent = 'Author : '
    pages.textContent =  'Pages  :'
    read.textContent =   'Read   :'
    labels.appendChild(title)
    labels.appendChild(author)
    labels.appendChild(pages)
    labels.appendChild(read)
    labels.classList.add('labels')
    
    const values = document.createElement('div')
    values.classList.add('value')
    
    const info = document.createElement('div')
    info.classList.add('info')

    card.classList.add('card')
    card.setAttribute('id', newBook.id)
    info.appendChild(labels)
    for(let key in newBook){
            const item = document.createElement('div')
            item.classList.add('item')
            if(key == 'read'){
                const readToggleBtn = document.createElement('button')
                readToggleBtn.textContent = newBook.showRead()
                readToggleBtn.classList.add('read-status')
                readToggleBtn.dataset.bookId = newBook.id
                values.appendChild(readToggleBtn)
                info.appendChild(values)
                card.appendChild(item)
                continue;
            }
            item.textContent = `${newBook[key]}`
            values.appendChild(item)
            info.appendChild(values)
            card.appendChild(info)
        }
        const delBtn = document.createElement('button')
        delBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>'
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