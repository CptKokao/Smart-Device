'use strict';
var btnNav = document.querySelector('#btn-nav');
var btnContact = document.querySelector('#btn-contact');
var navHidden = document.querySelector('.nav__list--hidden');
var contactHidden = document.querySelector('.footer__contact-list--hidden');

btnNav.addEventListener('click', function () {
  if (btnNav.classList.contains('btn__plus')) {
    btnNav.classList.remove('btn__plus');
    btnNav.classList.add('btn__minus');
    navHidden.style.display = 'block'
  } else {
    btnNav.classList.remove('btn__minus');
    btnNav.classList.add('btn__plus');
    navHidden.style.display = 'none'
  }
});

btnContact.addEventListener('click', function () {
  if (btnContact.classList.contains('btn__plus')) {
    btnContact.classList.remove('btn__plus');
    btnContact.classList.add('btn__minus');
    contactHidden.style.display = 'block'
  } else {
    btnContact.classList.remove('btn__minus');
    btnContact.classList.add('btn__plus');
    contactHidden.style.display = 'none'
  }
});
