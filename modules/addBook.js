import { Book } from "./book-class.js";
import { UI } from "./ui-class.js";

const addBook = (e) => {
	e.preventDefault();
	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value;
	const id = Math.random()
		.toString(36)
		.replace(/[^a-z]+/g, "")
		.substr(0, 5);
	// Instantiate Book
	const book = new Book(title, author, id);
	// Display Book in UI
	UI.myBooks = UI.myBooks.concat(book);
	UI.addBook(book);
	// Clear Fields
	UI.clearFields();
};

export default addBook;
