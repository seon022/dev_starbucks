const swiper = new Swiper(".notice_line .swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,
    autoplay: true,
});
const swiperPromotion = new Swiper(".promotion .swiper", {
    // Optional parameters
    loop: true,
    autoplay: true,
    slidePerView: 3,
    centeredSlides: true,
    spaceBetween: 15,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
});
