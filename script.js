function Book (title, author, pages, have_read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.have_read = have_read;
  this.info = function () {
    return (title + ' by ' + author + ', ' + pages + ' pages, Have I read it? ' + have_read);
  };
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
const book2 = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 500, true);
const book3 = new Book('The Two Towers', 'J.R.R. Tolkien', 450, true);
const book4 = new Book('The Return of the King', 'J.R.R. Tolkien', 575, false);

console.log(book1.info());
console.log(book2.info());
console.log(book3.info());
console.log(book4.info());

/* Below this is the real code for the website, above is the practice */

let myMovieLibrary = [];

let title = document.getElementById("title").value;
let director = document.getElementById("director").value;
let runtime = document.getElementById("runtime").value;

const dumpDiv = document.getElementById("dumpDiv");

function Movie (title, director, runtime, seen) {
  this.title = title;
  this.director = director;
  this.runtime = runtime;
  this.seen = seen;
}

function addMovie (title, director, runtime, seen) {
  console.log("This is working");
}

function openForm() {
  document.getElementById("popForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popForm").style.display = "none";
}

function createDiv() {
  const movieDiv = document.createElement("movieDiv");
  movieDiv.classList.add('movieDiv');
  movieDiv.innerHTML = title + director + runtime;
  dumpDiv.appendChild(movieDiv);
}