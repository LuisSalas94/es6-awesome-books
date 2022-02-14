import { UI } from "./ui-class.js";

const deleteBook = (e) => {
	const ui = new UI();
	if (e.target.classList.contains("delete")) {
		e.target.parentElement.remove();
		ui.deleteBook(e.target.id);
	}
};

export default deleteBook;
