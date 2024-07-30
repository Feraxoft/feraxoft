document.addEventListener('DOMContentLoaded', function () {
  if (window.location.hostname.endsWith('github.io')) {
    const baseURL = 'https://feraxoft.github.io/feraxoft/';
    const base = document.createElement('base');
    base.setAttribute('href', baseURL);
  }
});
