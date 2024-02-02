function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/foto gg 2.webp')
        img.setAttribute('alt', 'Foto de Gustavo Gonzaga Light Mode')
    } else {
        img.setAttribute('src', './assets/foto gg 2.webp')
        img.setAttribute('alt', 'Foto de Gustavo Gonzaga Dark Mode')
    }
}

ScrollReveal().reveal('ul li', { distance: '400px', origin: 'left', duration: 500, easing: 'ease-in-out'});
ScrollReveal().reveal('ul li.right', { distance: '400px', origin: 'right', duration: 500, easing: 'ease-in-out'});

ScrollReveal().reveal('#profile', { distance: '400px', origin: 'top', duration: 500, easing: 'ease-in-out'});

ScrollReveal().reveal('.links-sociais, #social-links, footer', { distance: '400px', origin: 'top', duration: 500, easing: 'ease-in-out'});

ScrollReveal().reveal('#switch', { distance: '0px', opacity: 0, duration: 1000, easing: 'ease-in-out'});



