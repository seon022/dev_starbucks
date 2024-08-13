//notice swiper
const swiperNotice = new Swiper(".notice-line .swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,
    autoplay: true,
});
// 프로모션 숨김여부
// 프로모션 보일때
// 프로모션 안보일때

const swiperPromotion = new Swiper(".promotion .swiper", {
    loop: true,
    autoplay: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 15,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
});

// notice promotion toggle
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
const promotionToggleBtnEl = document.querySelector(".toggle-promotion li");

let hidePromotion = false;

// 토글버튼 클릭하면
promotionToggleBtn.addEventListener("click", () => {
    // [...promotionToggleBtn.children].forEach((toggleBtn) => {
    //     toggleBtn.classList.toggle("off", toggleBtn === target);
    // });
    if (promotionToggleBtnEl.textContent === "expand_less") {
        promotionToggleBtnEl.textContent = "expand_more";
    } else {
        promotionToggleBtnEl.textContent = "expand_less";
    }

    hidePromotion = !hidePromotion;
    if (hidePromotion) {
        promotionEl.classList.add("toggle");
    } else {
        promotionEl.classList.remove("toggle");
    }
});

// visual img 순서대로 나오게 하기.
const fadeEls = document.querySelectorAll("main-visual_wrap .fade-in");
fadeEls.forEach((fadeEl, index) => {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7,
        opacity: 1,
    });
});

// scrollMagic
const scrollEls = document.querySelectorAll("section.scroll");
scrollEls.forEach((scrollEl) => {
    new ScrollMagic.Scene({
        triggerElement: scroll,
        triggerHooks: 0.5,
    })
        .setClassToggle(scrollEl, "show")
        .addTo(new ScrollMagic.Controller());
});
