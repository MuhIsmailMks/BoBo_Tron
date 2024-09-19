//  scroll animation Effect
window.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        once: true
    });
})

// navbar 
const menuLinksContainer = document.querySelector('.menu_links_container')
const menuBtn = document.querySelector('.menuBtn')
const closeBtn = document.querySelector('.closeBtn')

menuBtn.addEventListener('click', () => {
    menuLinksContainer.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    menuLinksContainer.classList.remove('active')
});

document.querySelectorAll('.links_nav a').forEach(function(link) {
    link.addEventListener('click', function() {   
      if (menuLinksContainer.classList.contains('active')) {
        menuLinksContainer.classList.remove('active');
      }
    });
});

// about listener
const fire_btn = document.querySelector('.fire_btn')
const fireImg = document.querySelector('.fireImg')
const aboutMainImg = document.querySelector('.aboutMainImg');

fire_btn.addEventListener('click', () => {
    fire_btn.classList.add('active')
    aboutMainImg.classList.add('active')
    fireImg.classList.add('active')
})

// copy address
const copyAddress = document.querySelector('.copy_btn');
    
let text = document.querySelector('.copy-box__text');
let btn = document.querySelector('.copy-box__text');
let btnText = btn.textContent;
let timeout;

copyAddress.addEventListener('click', () => { 
    navigator.clipboard.writeText(text.textContent).then(function () {
        btn.textContent = 'Copied';

        clearTimeout(timeout);
        timeout = setTimeout(function () {
            btn.textContent = btnText;
        }, 2000);
    }).catch(function (err) {
        console.error('Failed to copy text: ', err);
    });
    
})