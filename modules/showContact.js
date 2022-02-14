const showContact = () => {
  const contacts = document.querySelector('#contact');
  contacts.classList.add('active');
  const addbook = document.querySelector('#add-new');
  addbook.classList.remove('active');
  const list = document.querySelector('#listbook');
  list.classList.remove('active');
};

export default showContact;
