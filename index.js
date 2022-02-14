/* eslint-disable max-classes-per-file */

import { UI } from "./modules/ui-class.js";
import { Book } from "./modules/book-class.js";
import addBook from "./modules/addBook.js";
import deleteBook from "./modules/deleteBook.js";
import showAdd from "./modules/showAdd.js";
import showContact from "./modules/showContact.js";
import showList from "./modules/showList.js";

// Event Listener for Add a Book
const form = document.querySelector("#form");
form.addEventListener("submit", addBook);

window.addEventListener("load", UI.displayBooks());

// Event Listener for delete a book
const container = document.querySelector(".book-container");
container.addEventListener("click", deleteBook);

window.addEventListener("DOMContentLoaded", UI.displayBooks());

//Show Books
const add = document.querySelector("#add");
add.addEventListener("click", showAdd);

const contact = document.querySelector("#contactID");
contact.addEventListener("click", showContact);

const list = document.querySelector("#list");
list.addEventListener("click", showList);
