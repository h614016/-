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


const thisYear = document.querySelector('this-year');
thisYear.textContent = new Date().getFullYear;