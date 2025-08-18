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
Object.defineProperty(Book.prototype, 'toggle', {
        value: function(){
            if(this.read)
                this.read = false
            else
                this.read = true
            displayBooks()
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
    newBook = new Book(title, author, pages, Boolean(read))
    console.log(newBook)
    Object.defineProperty(newBook, 'id', {
        value: crypto.randomUUID()
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
    const delHeader = document.createElement('td')

    titleHeader.textContent = 'Title'
    authorHeader.textContent = 'Author'
    pagesHeader.textContent = 'Pages'
    readHeader.textContent = 'Read'
    delHeader.textContent = 'Delete'
    headerRow.appendChild(titleHeader)
    headerRow.appendChild(authorHeader)
    headerRow.appendChild(pagesHeader)
    headerRow.appendChild(readHeader)
    headerRow.appendChild(delHeader)
    table.appendChild(headerRow)

    for(book of library){
        const tableRow = document.createElement('tr')
        
        //Iterate over each property of a Book
        for(let key in book){
            const tableData = document.createElement('td')
            if(key == 'read'){
                const readToggleBtn = document.createElement('button')
                readToggleBtn.textContent = book.showRead()
                readToggleBtn.classList.add('read-status')
                readToggleBtn.dataset.bookId = book.id
                tableData.appendChild(readToggleBtn)
                tableRow.appendChild(tableData)
                continue;
            }
            tableData.textContent = `${book[key]}`
            tableRow.appendChild(tableData)
        }
        const delBtn = document.createElement('button')
        delBtn.textContent = 'Del'
        delBtn.classList.add('del')
        delBtn.dataset.bookId = book.id

        const delData = document.createElement('td')
        delData.appendChild(delBtn)

        tableRow.appendChild(delData)
        table.appendChild(tableRow)
        toggleBook()
    }
}

function toggleBook(){
    const readToggleBtns = document.querySelectorAll('.read-status')

    readToggleBtns.forEach(btn =>{
    console.log(btn)
    btn.addEventListener('click', ()=>{
        const bookToToggle = library.filter(item => item.id === btn.dataset.bookId)
        bookToToggle[0].toggle()
        btn.textContent = bookToToggle[0].showRead()
    });
});
}