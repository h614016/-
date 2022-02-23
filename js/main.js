const searchEl = document.querySelector('.search');
// document 객체는 HTML 전체로 봐도 무방
const searchInputEl = searchEl.querySelector('input');
// const searchInputEl = document.querySelector('.search input')로 입력해도 되지만, 그럼 searchEl 변수를 만들어놓고 궅이 search를 한 번 더 찾는 꼴이 되니 document가 아닌 searchEl 변수 안에서 input 태그를 찾는 형식으로 바꾼다.

// 객체.addEventListener('이벤트', function(변수)
// {
//   객체.명령();
// })
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // 특정 클래스에 CSS를 설정해둔 후 포커스 됐을 때 클래스를 추가하도록 하면 포커스하는 것으로 새로운 CSS 설정 가능
  searchInputEl.setAttribute('placeholder', '통합검색');
  // setAttribute = HTML의 속성을 지정
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  // 현재 스크롤 위치를 확인하는 것
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  gsap.to(topEl, .3, {
    x: 0
  });
}
  // gsap.to(요소, 지속시간,옵션) / gsap 스크립트가 있어야만 사용 가능
  // display 속성을 쓸 수는 있으나, gsap에서는 텍스트를 ''로 묶어야만 인식 가능
  // 요소.style.스타일속성 으로 요소의 스타일 제어 가능
  else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    gsap.to(topEl, .3, {
      x: 100
    });
  }
}));
// document가 HTML 자체라면 window는 브라우저의 탭 하나를 의미
// _.throttle(함수, ms기준 시간)은 lodash의 함수로 300ms(0.3초) 단위로 부하를 주어 일정 시간에 한 번씩만 실행되도록 제어중 / lodash 스크립트가 있어야만 사용 가능

const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간,옵션) / gsap 스크립트가 있어야만 사용 가능
  // display 속성을 쓸 수는 있으나, gsap에서는 텍스트를 ''로 묶어야만 인식 가능
  // 요소.style.스타일속성 으로 요소의 스타일 제어 가능

  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1
  });
});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드를 가운데로
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEL = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //let으로 함수를 정의하면 나중에 값이 변할 수 있다.
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion; //함수 앞에 !를 붙이면 현재 값의 반대값을 부여한다.
  if (isHidePromotion) {
    promotionEL.classList.add('hide'); //요소.classList.add('클래스명'); >> 요소에 클래스를 부여
  } else {
    promotionEL.classList.remove('hide');
  }
})

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector,
    random(1.5, 2.5), {
      y: size,
      repeat: -1, //-1 :무한반복
      yoyo: true, //애니메이션을 반대로 재생
      ease: Power1.easeInOut,
      delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// const fadeRightEls = document.querySelectorAll('.find-store .fade-right')
// const fadeLeftEls = document.querySelectorAll('.find-store .fade-left')

// fadeRightEls.forEach(function (fadeRightEl, index) {
//   // gsap.to(요소, 지속시간,옵션) / gsap 스크립트가 있어야만 사용 가능
//   // display 속성을 쓸 수는 있으나, gsap에서는 텍스트를 ''로 묶어야만 인식 가능
//   // 요소.style.스타일속성 으로 요소의 스타일 제어 가능

//   gsap.to(fadeRightEl, 1, {
//     translate: 20px,
//     delay: (fadeRightEl + 1) * 0.7,
//     opacity: 1
//   });
// });

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소
      triggerHook: .8 //스크롤 최상단 > 최하단을 0~1로 볼 때
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller(

    ));
});


new Swiper('.awards .swiper-container', {
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 수
  spaceBetween: 10, // 슬라이드 사이 여백
  loop: true,
  autoplay: true,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const topEl = document.querySelector('#to-up-btn');

topEl.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});