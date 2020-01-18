'use strict';

/* аккордеон */
const btnNav = document.querySelector('#btn-nav');
const btnContact = document.querySelector('#btn-contact');
const navList = document.querySelector('.nav__list');
const contactList = document.querySelector('.footer__contact-list');

const toogle = (btn, changeClass) => {
  if (btn.classList.contains('footer__btn--plus')) {
    btn.classList.remove('footer__btn--plus');
    btn.classList.add('footer__btn--minus');
    changeClass.classList.remove('visually-hidden');
  } else {
    btn.classList.remove('footer__btn--minus');
    btn.classList.add('footer__btn--plus');
    changeClass.classList.add('visually-hidden');
  }
}

btnNav.addEventListener('click', () => toogle(btnNav, navList));
btnContact.addEventListener('click', () => toogle(btnContact, contactList));

/* модальное окно */
var modal = document.querySelector('.modal');
var callBtn = document.querySelector('.header__call');
var body = document.querySelector('body');
var overlay = document.querySelector('.overlay');
var close = document.querySelector('.modal__close');

/* открытие модального окна */
callBtn.addEventListener('click', () => {
  if (modal.classList.contains('visually-hidden')) {
    modal.classList.remove('visually-hidden');
    overlay.classList.remove('visually-hidden');
    body.style.overflow = 'hidden';
  } else {
    modal.classList.add('visually-hidden');
    overlay.classList.add('visually-hidden');
    body.style.overflow = 'auto';
  }
})

/* закрытие модального окна */
const closeModal = () => {
  modal.classList.add('visually-hidden');
  overlay.classList.add('visually-hidden');
  body.style.overflow = 'auto'
}

close.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)
window.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    closeModal();
  }
})

