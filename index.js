const hamburgerMenu = document.getElementById("menu");
const btnHamburger = document.getElementById("btn-hamburger");
btnHamburger.addEventListener("click",() => {
    if(!hamburgerMenu.classList.contains('active')) {
        hamburgerMenu.classList.add('active');
        btnHamburger.innerHTML = "<img src='./assets/img/close.png'>";
    }
    else{
        hamburgerMenu.classList.remove('active');
        btnHamburger.innerHTML = "<img src='./assets/img/hamburger-open.png'>"
    }
});