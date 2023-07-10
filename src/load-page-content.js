function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const item1 = document.createElement('div');
    item1.classList.add('nav-item', 'active');
    item1.datakey = 0;
    item1.textContent = 'Home';
    const item2 = document.createElement('div');
    item2.classList.add('nav-item');
    item2.datakey = 1;
    item2.textContent = 'Menu';
    const item3 = document.createElement('div');
    item3.classList.add('nav-item');
    item3.datakey = 2;
    item3.textContent = 'Contact';

    nav.appendChild(item1);
    nav.appendChild(item2);
    nav.appendChild(item3);

    header.appendChild(nav);

    return header;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerText = document.createElement('p');
    footerText.classList.add('footer-text');
    footerText.textContent = `Copyright © ${(new Date()).getFullYear()} tylerhand1`;

    footer.appendChild(footerText);

    return footer;
}

function loadPage() {
    const content = document.querySelector('#content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
}

export default loadPage;