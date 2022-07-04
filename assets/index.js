let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4, // how many images can you see in the viewport at once in the carousel
    spaceBetween: 20, // in pixels

    // this is to make the arrow buttons scroll by however many images you want
    // slidesPerGroup: 2,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});