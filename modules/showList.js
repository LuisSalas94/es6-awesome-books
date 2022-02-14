const showList = () => {
	document.querySelector("#listbook").classList.add("active");
	const contacts = document.querySelector("#contact");
	contacts.classList.remove("active");
	const addbook = document.querySelector("#add-new");
	addbook.classList.remove("active");
};

export default showList;
