const showAdd = () => {
	const addbook = document.querySelector("#add-new");
	addbook.classList.add("active");
	const list = document.querySelector("#listbook");
	list.classList.remove("active");
	const contact = document.querySelector("#contact");
	contact.classList.remove("active");
};

export default showAdd;
