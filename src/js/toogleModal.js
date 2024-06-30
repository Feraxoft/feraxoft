const open = document.querySelector('.js-modal-open');
const close = document.querySelector('.js-modal-close');
const modal = document.querySelector('.js-backdrop');

open.addEventListener('click', openModal);
close.addEventListener('click', closeModal);

function openModal() {
  modal.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');

  document.addEventListener('keydown', closeModalWithEsc);
  modal.addEventListener('click', closeModalBackdropClick);
}

function closeModal() {
  modal.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');

  document.removeEventListener('keydown', closeModalWithEsc);
  modal.removeEventListener('click', closeModalBackdropClick);
}

function closeModalWithEsc(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function closeModalBackdropClick(e) {
  if (e.target === modal) {
    closeModal();
  }
}
