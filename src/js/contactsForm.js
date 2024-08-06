import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_sjub4p4';
const TEMPLATE_ID = 'template_aqc7han';
const PUBLIC_KEY = 'RCbRpHCE5ZYDG6Ivp';

const contactsForm = document.querySelector('.contacts-form');
const contactsBtn = document.querySelector('.js-contacts-btn');
const contactsSuccess = document.querySelector('.js-contacts-success');
const contactsError = document.querySelector('.js-contacts-error');

contactsForm.addEventListener('submit', sendMessage);

function sendMessage(e) {
  e.preventDefault();

  contactsBtn.innerHTML = `<span class="loader"></span>`;

  const form = e.target;

  const params = {
    userName: form.elements.name.value,
    userEmail: form.elements.email.value,
    userMessage: form.elements.message.value,
  };

  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, params, {
      publicKey: PUBLIC_KEY,
    })
    .then(
      () => {
        form.reset();
        if (!contactsError.classList.contains('visually-hidden')) {
          contactsError.classList.add('visually-hidden');
        }
        contactsBtn.classList.add('visually-hidden');
        contactsSuccess.classList.remove('visually-hidden');
      },
      err => {
        contactsBtn.innerHTML = `<span>Send</span>`;
        contactsError.classList.remove('visually-hidden');
        console.log(err.text);
      }
    );
}
