const myLibrary = [];
const container = document.querySelector(".container");
const form = document.querySelector("dialog");

const newButton = document.createElement("button");
newButton.textContent = "Add Book";
newButton.addEventListener("click", displayForm);
container.appendChild(newButton);

form.addEventListener("submit", extractFormValues);

function Book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(name, author, pages, isRead) {
    let newBook = new Book(name, author, pages, isRead);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    container.innerHTML = "";
    container.appendChild(newButton);
    myLibrary.forEach((book) => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            Book: ${book.name}<br>
            Author: ${book.author}<br>
            Pages: ${book.pages}<br>
            Is Read: ${book.isRead}<br><br>
        `;
        container.appendChild(newDiv);
    })
}

function displayForm() {
    form.showModal();
}

function extractFormValues(event) {
    event.preventDefault();

    const enteredName = document.querySelector(`input[name="title"]`);
    const enteredAuthor = document.querySelector(`input[name="author"]`);
    const enteredPages = document.querySelector(`input[name="pages"]`);
    const enteredRead = document.querySelector(`input[type="radio"]:checked`);

    

    addBookToLibrary(enteredName.value, enteredAuthor.value, enteredPages.value, enteredRead.value);
    enteredName.value = "";
    enteredAuthor.value = "";
    enteredPages.value = "";
    enteredRead.checked = false;

    form.close();
}



    