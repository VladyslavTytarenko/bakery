const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnOpenMobile = document.querySelector('.modal-btn-open-mobile');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnOpenMobile.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);