const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');

const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems =document.querySelectorAll('.menu-nav__item')//Aqui estas seleccionando todos los items del elementos con clase .menu-nav 
                                                            //Por lo tanto deberias utilizar forEach para que se cree un elemento por cada uno
                                                            //Vease linea 20


let showMenu = false;

menuBtn.addEventListener( 'click', toggleMenu);

function toggleMenu(){
    if (!showMenu) {  //El signo '!' representa un operador not 
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));//Creando un item con clase '.open' por cada  elemento de la lista 'navItems'.

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));// Aqui simplemente se remueve

        showMenu = false;
    }                      
}