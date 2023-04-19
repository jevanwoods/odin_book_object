/* eslint-disable no-unused-vars */
/* 
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
*/
/* Below this is the real code for the website, above is the practice */

let myMovieLibrary = [];

const dumpDiv = document.getElementById('dumpDiv');
const rmvBtn = document.getElementById('rmvBtn');
const firstMovie = document.getElementById('firstMovie');

function openForm () {
  document.getElementById('popForm').style.display = 'block';
}

function addMovieToArray () {
  var title = document.getElementById("title").value;
  var director = document.getElementById("director").value;
  var runtime = document.getElementById("runtime").value;
  var seen = document.getElementById("seen").value;
  var uniqueID = title + runtime;
  console.log(uniqueID);
  let newMovie = {title: title, director: director, runtime: runtime, seent: seen, id: title + runtime };
  myMovieLibrary.push(newMovie);
}

function Movie (title, director, runtime, seen) {
  var title = document.getElementById("title").value;
  var director = document.getElementById("director").value;
  var runtime = document.getElementById("runtime").value;
  var seen = document.getElementById("seen").value;
  var uniqueID = title + runtime;
  this.title = title;
  this.director = director;
  this.runtime = runtime;
  this.seen = seen;
  console.log('something happened');
  const movieDiv = document.createElement('movieDiv');
  const removeBtn = document.createElement('button');
  const btnText = document.createTextNode('X');
  const titleDiv = document.createElement('titleDiv');
  const directorDiv = document.createElement('directorDiv');
  const runtimeDiv = document.createElement('runtimeDiv');
  movieDiv.classList.add('movieDiv');
  removeBtn.classList.add('removeBtn');
  titleDiv.classList.add('titleDiv');
  directorDiv.classList.add('directorDiv');
  runtimeDiv.classList.add('runtimeDiv');
  movieDiv.setAttribute('id',uniqueID);
  movieDiv.append(removeBtn);
  removeBtn.appendChild(btnText);
  removeBtn.onclick = removeThisMovie();
  movieDiv.append(titleDiv);
  movieDiv.append(directorDiv);
  movieDiv.append(runtimeDiv);
  titleDiv.innerHTML = title;
  directorDiv.innerHTML = director;
  runtimeDiv.innerHTML = runtime + ' minutes';
  dumpDiv.appendChild(movieDiv);
}

function closeForm () {
  document.getElementById('popForm').style.display = 'none';
}

function isChecked (checkedValue) {
  let yaSeent = document.getElementById('seen1');
  let bkgrd = document.getElementById('firstMovie');
  if (yaSeent.checked == true) {
    bkgrd.style.backgroundColor = 'darkseagreen';
  } else {
    bkgrd.style.backgroundColor = 'ghostwhite';
  }
}

function removeMovie () {
  firstMovie.remove();
}

function removeThisMovie () {
  console.log('test test test');
}

function readArray () {
  console.log(myMovieLibrary);
}
