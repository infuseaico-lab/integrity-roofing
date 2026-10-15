import '@fontsource/manrope/latin-400.css';
import '@fontsource/manrope/latin-600.css';
import '@fontsource/manrope/latin-700.css';
import '@fontsource/manrope/latin-800.css';
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-500.css';
import '@fontsource/dm-sans/latin-700.css';
const toggle = document.querySelector('.menu-toggle');
const header = document.querySelector('header');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  header.classList.toggle('menu-open', open);
});
document.querySelectorAll('header nav a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('menu-open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('estimate-form').addEventListener('submit', event => {
  event.preventDefault();
  const values = new FormData(event.currentTarget);
  const request = `INTEGRITY ROOFING — ESTIMATE REQUEST\n\nName: ${values.get('name')}\nPhone: ${values.get('phone')}\nEmail: ${values.get('email')}\nService: ${values.get('service')}\n\nProject details:\n${values.get('message') || 'Not provided'}\n\nThis request has not been sent. Please share it with your roofing provider.`;
  const url = URL.createObjectURL(new Blob([request], {type: 'text/plain'}));
  const result = document.getElementById('form-result');
  result.replaceChildren();
  const message = document.createElement('p');
  message.textContent = 'Your request is ready. It has not been sent. Download it to keep or share with your roofing provider.';
  const download = document.createElement('a');
  download.href = url;
  download.download = 'integrity-roofing-estimate.txt';
  download.textContent = 'Download my request ↓';
  result.append(message, download);
  result.hidden = false;
});
