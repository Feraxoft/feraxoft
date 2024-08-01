document.addEventListener('DOMContentLoaded', function () {
  if (window.location.hostname.endsWith('github.io')) {
    const logo = document.querySelector('.js-header-logo');
    const home = document.querySelector('.js-home-link');
    if (logo) {
      logo.setAttribute('href', '/feraxoft');
    }
    if (home) {
      home.setAttribute('href', '/feraxoft');
    }
  }
});
