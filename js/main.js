let myLibrary = [];

let counter = 0;
function generateGuid() {
  return counter++;
}

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = generateGuid();
}

Book.prototype.toggleStatus = function (status) {
  this.status = status;
};

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
  const bookStatusButton = document.createElement('button');
  bookStatusButton.classList.add('book-status');
  bookStatusButton.value = books[bookIndex]['id'];
  bookStatusButton.textContent = books[bookIndex]['status'];
  newBook.appendChild(bookStatusButton);

  //button
  const bookDeleteButton = document.createElement('button');
  bookDeleteButton.classList.add('book-button');
  bookDeleteButton.value = books[bookIndex]['id'];
  bookDeleteButton.textContent = 'delete book';
  newBook.appendChild(bookDeleteButton);
  booksContainer.appendChild(newBook);

  bookDeleteButton.addEventListener('click', removeBook);
  bookStatusButton.addEventListener('click', (e) => {
    for (let i = 0; i < myLibrary.length; i++) {
      let getBookStatus = myLibrary[i].status;
      if (myLibrary[i]['id'] == e.target.value) {
        if (getBookStatus === 'Read') {
          bookStatusButton.textContent = 'Unread';
          myLibrary[i].toggleStatus('Unread');
        } else if (getBookStatus === 'Unread') {
          bookStatusButton.textContent = 'Pending';
          myLibrary[i].toggleStatus('Pending');
        } else {
          bookStatusButton.textContent = 'Read';
          myLibrary[i].toggleStatus('Read');
        }
      }
    }
    console.log(myLibrary);
  });
}

function removeBook(e) {
  e.target.parentElement.remove();
  let index = myLibrary.findIndex(function (obj) {
    return obj.id == e.target.value;
  });
  if (index !== -1) myLibrary.splice(index, 1);
  console.log(myLibrary);
}

// function openSidepanel() {
//   document.getElementById('sidepanel').style.width = '100vw';
// }

// function myFunction() {
//   let side = document.getElementById('sidepanel');
//   if (side.style.display === 'none') {
//     side.style.display = 'block';
//   } else {
//     side.style.display = 'none';
//   }
// }

const booksContainer = document.querySelector('.books');
const book = document.querySelector('.book');
const addBook = document.querySelector('#add-book');
const displayBook = document.querySelector('#display-book');
const deleteBook = document.querySelector('.book-button');
const btnOpenSidepanel = document.querySelector('#btnNewBook');
const discardSidepanel = document.querySelector('#discardBtn');
const sidepanel = document.querySelector('#sidepanel');

addBook.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

displayBook.addEventListener('click', (e) => {
  e.preventDefault();
  displayBooks(myLibrary);
});

btnOpenSidepanel.addEventListener('click', (e) => {
  e.preventDefault();
  sidepanel.style.width = '100vw';
});

discardSidepanel.addEventListener('click', (e) => {
  e.preventDefault();
  sidepanel.style.width = '0';
});
