export default function loadHome() {
    const main = document.querySelector('.main');

    const title = document.createElement('div');
    title.classList.add('title');
    const h1 = document.createElement('h1');
    h1.textContent = 'Della Nonna';
    const h2_1 = document.createElement('h2');
    h2_1.textContent = 'Neapolitan Pizza';
    const h2_2 = document.createElement('h2');
    h2_1.textContent = 'Just like Grandma used to make';

    title.appendChild(h1);
    title.appendChild(h2_1);
    title.appendChild(h2_2);

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    const pizzaImg = document.createElement('div');
    pizzaImg.classList.add('neapolitan-pizza-img', 'img');
    pizzaImg.id = 'neapolitan-pizza-img';

    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt bibendum ipsum non fermentum. Quisque tristique porta pharetra. Donec hendrerit turpis at mattis sodales. Quisque tincidunt tortor interdum ligula cursus tempor. Etiam metus neque, egestas at aliquet et, mollis id leo. Integer ornare molestie elit, mollis aliquet felis finibus et. Aenean pretium ornare diam, non maximus elit lacinia a.';

    mainContent.appendChild(pizzaImg);
    mainContent.appendChild(p);

    main.appendChild(title);
    main.appendChild(mainContent);
}