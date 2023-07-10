import loadPage from './load-page-content';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

import PizzaImg from './img/pizza.jpg';
import CheeseImg from './img/cheese.jpg';
import PepperoniImg from './img/pepperoni.jpg';

function homeImg() {
    const pizzaImg = new Image();
    pizzaImg.src = PizzaImg;
}

function menuImg() {
    const cheeseImg = new Image();
    cheeseImg.src = CheeseImg;

    const pepperoniImg = new Image();
    pepperoniImg.src = PepperoniImg;
}

function clearMain() {
    const content = document.querySelector('#content');
    for(let i = 0; i < content.childNodes.length; i++) {
        if(content.childNodes[i].className === 'main') {
            while(content.childNodes[i].firstChild) {
                content.childNodes[i].removeChild(content.childNodes[i].lastChild);
            }
        }
    }
}

function updateHeader(key) {
    const nav = document.querySelector('.nav');
    for(let i = 0; i < nav.childNodes.length; i++) {
        if(nav.childNodes[i].classList.contains('active')) {
            nav.childNodes[i].classList.toggle('active');
        }
    }

    nav.childNodes[key].classList.add('active');
}

function changePage(e) {
    updateHeader(e.target.datakey);
    clearMain();
    switch(e.target.datakey) {
        case 0:
            loadHome();
            break;
        case 1:
            loadMenu();
            break;
        case 2:
            loadContact();
            break;
        default:
            return;
    }
}

loadPage();

homeImg();

menuImg();

loadHome();

// Header button event listeners

const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(navItem => navItem.addEventListener('click', e => changePage(e)))