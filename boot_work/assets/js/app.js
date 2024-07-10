const slickSlide = jQuery('#slick-slide')

if (slickSlide) {
  slickSlide.slick({
    // 점 만들어 주기
    dots: true,
    // 좌우 화살표
    arrows: false,
    // 한 슬라이드에 몇 개 보여줄지
    slidesToShow: 3,
    slideToScroll: 1,
    // 자동 스크롤
    autoplay: true,
    // 몇 초마다 움직일지
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
}
