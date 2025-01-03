const myLibrary = [];
const container = document.querySelector(".container");

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
        newDiv.textContent = book.name + book.author + book.pages + book.isRead;
        container.appendChild(newDiv);
    })
}

const newButton = document.createElement("button");
newButton.textContent = "hello";
newButton.addEventListener("click", () => {
    addBookToLibrary("joe", "joe", "joe", "joe");
})
container.appendChild(newButton);

