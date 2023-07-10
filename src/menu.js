export default function loadMenu() {
    const main = document.querySelector('.main');

    const title = document.createElement('div');
    title.classList.add('title');
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    title.appendChild(h1);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');
    const h3_1 = document.createElement('h3');
    h3_1.textContent = 'Cheese Pizza';
    const cheeseImg = document.createElement('div');
    cheeseImg.classList.add('cheese-pizza-img', 'img');
    cheeseImg.id = 'cheese-pizza-img';
    const p_1 = document.createElement('p');
    p_1.textContent = 'Etiam metus neque, egestas at aliquet et, mollis id leo.';

    menuItem1.appendChild(h3_1);
    menuItem1.appendChild(cheeseImg);
    menuItem1.appendChild(p_1);

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');
    const h3_2 = document.createElement('h3');
    h3_2.textContent = 'Pepperoni Pizza';
    const pepperoniImg = document.createElement('div');
    pepperoniImg.classList.add('pepperoni-pizza-img', 'img');
    pepperoniImg.id = 'pepperoni-pizza-img';
    const p_2 = document.createElement('p');
    p_2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt bibendum ipsum non fermentum.';

    menuItem2.appendChild(h3_2);
    menuItem2.appendChild(pepperoniImg);
    menuItem2.appendChild(p_2);

    menuContainer.appendChild(menuItem1);
    menuContainer.appendChild(menuItem2);

    main.appendChild(title);
    main.appendChild(menuContainer);
}