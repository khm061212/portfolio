$(function () {
    const $menu = $('.nav-2 li')
    const $sections = $('.about, .project, .design')
    const navH = () => $('.nav').outerHeight() || 90

    // 로고 클릭 > 맨 위로
    $('.nav-1 > li:first').on('click', function (e) {
        e.preventDefault()
        $('html, body').stop().animate({ scrollTop: 0 }, 450)
    })

    // 클릭 > 해당 섹션으로 스크롤
    $menu.on('click', function (e) {
        e.preventDefault()
        const i = $(this).index()
        $('html, body').stop().animate({
            scrollTop: $sections.eq(i).offset().top - navH()
        }, 450)
    })

    // 스크롤 > 현재 섹션에 on
    $(window).on('scroll', function () {
        const y = $(this).scrollTop() + navH() + 10;
        let i = $sections.length - 1
        while (i > 0 && $sections.eq(i).offset().top > y) i--
        $menu.removeClass('on').eq(i).addClass('on')
    }).trigger('scroll')
})


// 스크롤시 헤더 색 변화
$(window).on('scroll', function () {
    $('.nav').toggleClass('scrolled', $(this).scrollTop() > 0)
})

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
})