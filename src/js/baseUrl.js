document.addEventListener('DOMContentLoaded', function () {
  if (window.location.hostname.endsWith('github.io')) {
    const baseURL = '/feraxoft/';
    const base = document.createElement('base');
    base.setAttribute('href', baseURL);
    document.head.appendChild(base);
  }
});
