const homeLink = document.querySelector('.js-home-link');
const aboutLink = document.querySelector('.js-about-link');
const productsLink = document.querySelector('.js-products-link');
const contactsLink = document.querySelector('.js-contacts-link');

const aboutPage = document.querySelector('.about-container');
const productsPage = document.querySelector('.products-container');
const contactsPage = document.querySelector('.contacts-container');

if (aboutPage) {
  aboutLink.classList.add('header-active-link');
} else if (productsPage) {
  productsLink.classList.add('header-active-link');
} else if (contactsPage) {
  contactsLink.classList.add('header-active-link');
} else {
  homeLink.classList.add('header-active-link');
}
