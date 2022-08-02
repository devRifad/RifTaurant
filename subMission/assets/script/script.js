const btnContainer = document.getElementById('navbar');
const btns = btnContainer.getElementsByClassName('btn');

for(i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active');
        this.className += ' active';
    })
};

const logo = document.querySelector('.logoMenu');
const menu = document.querySelector('.hamburger');

logo.addEventListener('click', function(){
    menu.classList.toggle('showMenu');
});


