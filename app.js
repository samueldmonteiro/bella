const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1.1, /* Ajusta a quantidade de slides visíveis para mostrar parcialmente o próximo slide */
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 1.1, /* Mostra parte do próximo slide em telas pequenas */
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.1, /* Mostra parte do próximo slide em telas médias */
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3.1, /* Mostra parte do próximo slide em telas grandes */
            spaceBetween: 40,
        },
    },
    mousewheel: true,
});


if (window.innerWidth < 580) {
    // Seleciona o elemento pelo ID (substitua 'elementoId' pelo ID correto)
    var elemento = document.getElementById('.carousel-bella');

    // Remove a classe desejada
    elemento.classList.remove('carousel-desktop');
}

const container = document.querySelector('.carousel-desktop .container');

gsap.to(container, {
    x: -container.scrollWidth + document.documentElement.clientWidth,
    opacity: 1, // Anima a opacidade para 1
    duration: 20,
    ease: "power1.inOut",
    repeat: -1
  });