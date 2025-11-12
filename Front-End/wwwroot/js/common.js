
$(document).ready(function() {
    $('.open-popup').click(function(event) {
        var targetId = $(this).attr('href'); 
        var targetPopup = $(targetId); 
        targetPopup.fadeIn(200); 
        $('body').addClass('overflow-hidden'); // Ngăn cuộn
        event.preventDefault();
    });

    $('.popup-close').click(function() {
        $(this).closest('.popup').fadeOut(200);
        $('body').removeClass('overflow-hidden'); // Cho phép cuộn lại
    });
    // Đóng popup khi click ra ngoài nội dung chính
    $(document).mousedown(function (event) {
        $('.popup:visible').each(function () {
            const popupBox = $(this).find('.popup-content'); // nội dung chính của popup
            if (!popupBox.is(event.target) && popupBox.has(event.target).length === 0) {
                $(this).fadeOut(200);
                $('body').removeClass('overflow-hidden');
            }
        });
    });
});
$(function () {
  
    // stiky menu
    var stickyElements = $('.sticky');
    if (stickyElements.length > 0) {
        Stickyfill.add(stickyElements);
    }
    $("<div id='menu_before'></div>").insertBefore(".header");
    $(window).scroll(function () {
        var top_start = $("#menu_before").position().top + 0;
        if ($(window).scrollTop() > top_start) {
            $('.header').addClass('pin');
        } else if ($(window).scrollTop() <= top_start) {

            $('.header').removeClass('pin');
        }
    });
});

function scrollTop() {
    if ($(window).scrollTop() > 500) {
        $(".backToTopBtn").addClass("active");
    } else {
        $(".backToTopBtn").removeClass("active");
    }
}
$(function () {
    scrollTop();
    $(window).on("scroll", scrollTop);

    $(".backToTopBtn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1);
        return false;
    });
});

 // js slide sản phẩm 5 cột
const flashSaleSwiper = new Swiper(".product-swiper .swiper", {
    slidesPerView: 2,
    spaceBetween: 15,
    navigation: {
        nextEl: ".product-swiper .swiper-button-next",
        prevEl: ".product-swiper .swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 3.5,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});

$(document).ready(function () {
   $('.accordion-toggle').on('click', function () {
    const $panel = $(this).next('.accordion-panel');
    $('.accordion-panel').not($panel).slideUp();
    $('.accordion-toggle').not(this).removeClass('active');
    $(this).toggleClass('active');
    $panel.stop(true, true).slideToggle();
  });
  
});
const bannerSwiper = new Swiper(".banner-swiper .swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay:true,
    loop:true,
    navigation: {
        nextEl: ".banner-swiper .swiper-button-next",
        prevEl: ".banner-swiper .swiper-button-prev",
    },
  
});
