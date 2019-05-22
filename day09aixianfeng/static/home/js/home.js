// $(function () {
//
//      $('.home').width(innerWidth)
//
//         var topSwiper = new Swiper('.swiper-container', {
//         pagination: '.swiper-pagination',
//
//         slidesPerView: 1,
//         paginationClickable: true,
//         spaceBetween: 30,
//         loop: true,
//         autoplay:2000,
//     });
//
// })
$(function () {
    $('.cart').width(innerWidth)
    // 恢复盒子大小


    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        autoplay:2000,
    });

  // var swiper = new Swiper('.swiper-container', {
  //       pagination: '.swiper-pagination',
  //       slidesPerView: 3,
  //       paginationClickable: true,
  //       spaceBetween: 30
  //   });

    var mustbuySwiper = new Swiper('#mustbuySwiper', {
        slidesPerView: 3,
        spaceBetween: 5,
        loop: true,
    });
})