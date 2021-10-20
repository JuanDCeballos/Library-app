let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  let book = new Book(
    document.querySelector('#book-title').value,
    document.querySelector('#book-author').value,
    document.querySelector('#book-pages').value,
    document.querySelector('#book-status').value
  );
  myLibrary.push(book);
}

function displayBooks(books) {
  let bookIndex = books.length - 1;

  const newBook = document.createElement('div');
  newBook.classList.add('book');
  //title
  const bookTitle = document.createElement('div');
  bookTitle.classList.add('book-title');
  const titleTextContent = document.createElement('p');
  titleTextContent.textContent = books[bookIndex]['title'];
  bookTitle.appendChild(titleTextContent);
  newBook.appendChild(bookTitle);
  //author
  const bookAuthor = document.createElement('div');
  bookAuthor.classList.add('book-author');
  const authorTextContent = document.createElement('p');
  authorTextContent.textContent = books[bookIndex]['author'];
  bookAuthor.appendChild(authorTextContent);
  newBook.appendChild(bookAuthor);
  //pages
  const bookPages = document.createElement('div');
  bookPages.classList.add('book-pages');
  const pagesTextContent = document.createElement('p');
  pagesTextContent.textContent = books[bookIndex]['pages'];
  bookPages.appendChild(pagesTextContent);
  newBook.appendChild(bookPages);
  //status
  const bookStatus = document.createElement('button');
  bookStatus.classList.add('book-status');
  // bookStatus.setAttribute('data-attribute', bookIndex);
  bookStatus.textContent = books[bookIndex]['status'];
  newBook.appendChild(bookStatus);

  //button
  const bookButton = document.createElement('button');
  bookButton.classList.add('book-button');
  bookButton.setAttribute('data-attribute', bookIndex);
  bookButton.textContent = 'delete book';
  newBook.appendChild(bookButton);

  booksContainer.appendChild(newBook);

  bookStatus.addEventListener('click', toggleStatus);
  bookButton.addEventListener('click', removeBook);
}

function removeBook(e) {
  e.target.parentElement.remove();
  myLibrary.splice(e.target.getAttribute('data-attribute'), 1);
}

const booksContainer = document.querySelector('.books');
const book = document.querySelector('.book');
const addBook = document.querySelector('#add-book');
const displayBook = document.querySelector('#display-book');
const deleteBook = document.querySelector('.book-button');

addBook.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

displayBook.addEventListener('click', (e) => {
  e.preventDefault();
  displayBooks(myLibrary);
});
