export default function loadContact() {
    const main = document.querySelector('.main');

    const title = document.createElement('div');
    title.classList.add('title');

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact';

    const p1 = document.createElement('p');
    p1.classList.add('contact-info');
    p1.textContent = 'Phone: +1 555 555 5555';

    const p2 = document.createElement('p');
    p2.classList.add('contact-info');
    p2.textContent = 'Email: pizza@dellanonna.com';

    title.appendChild(h1);
    title.appendChild(p1);
    title.appendChild(p2);

    main.appendChild(title);
}