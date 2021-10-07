let myLibrary = [];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

  // getInfo() {
  //   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  // }
}

// let book1 = new Book('1984', 'George Orwell', 235, 'yes');
// let book2 = new Book(
//   'Cien anos de soledad',
//   'Gabriel Garcia Marquez',
//   1000,
//   'yes'
// );

// myLibrary.push(book1);
// myLibrary.push(book2);

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
  let Bookindex;
  for (let i = 0; i < books.length; i++) {
    Bookindex = i;
  }
  const newBook = document.createElement('div');
  newBook.classList.add('book');
  //title
  const bookTitle = document.createElement('div');
  bookTitle.classList.add('book-title');
  const titleTextContent = document.createElement('p');
  titleTextContent.textContent = books[a]['title'];
  bookTitle.appendChild(titleTextContent);
  newBook.appendChild(bookTitle);
  //author
  const bookAuthor = document.createElement('div');
  bookAuthor.classList.add('book-author');
  const authorTextContent = document.createElement('p');
  authorTextContent.textContent = books[a]['author'];
  bookAuthor.appendChild(authorTextContent);
  newBook.appendChild(bookAuthor);
  //pages
  const bookPages = document.createElement('div');
  bookPages.classList.add('book-pages');
  const pagesTextContent = document.createElement('p');
  pagesTextContent.textContent = books[a]['pages'];
  bookPages.appendChild(pagesTextContent);
  newBook.appendChild(bookPages);
  //status
  const bookStatus = document.createElement('div');
  bookStatus.classList.add('book-status');
  const statusTextContent = document.createElement('p');
  statusTextContent.textContent = books[a]['status'];
  bookStatus.appendChild(statusTextContent);
  newBook.appendChild(bookStatus);
  //button
  const bookButton = document.createElement('button');
  bookButton.classList.add('book-button');
  bookButton.setAttribute('book-index', Bookindex);
  bookButton.textContent = 'delete book';
  newBook.appendChild(bookButton);

  booksContainer.appendChild(newBook);
}

const booksContainer = document.querySelector('.books');
const book = document.querySelector('.book');
const addBook = document.querySelector('#add-book');
const displayBook = document.querySelector('#display-book');

addBook.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

displayBook.addEventListener('click', (e) => {
  e.preventDefault();
  displayBooks(myLibrary);
});
