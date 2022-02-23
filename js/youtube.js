 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.

 function onYouTubeIframeAPIReady() {
   new YT.Player('player', { //해당 선택자의 'player'는 자동으로 player인 id를 찾으므로 #을 넣으면 안된다.
     videoId: 'An6LvWQuj_8', //유튜브 홈페이지에서 소스코드를 복붙해도 영상 출력은 가능하지만, 출력 외에 여러 가지를 하기 위해서는 동영상 id만 따와야한다.
     playerVars: { //영상 재생 시 변수들을 설정하는 함수
       autoplay: true,
       loop: true,
       playlist: 'An6LvWQuj_8' // 동영상에서 loop 설정 시 루프할 플리를 넣어줘야 한다.
     },
     events: {
       onReady: function (event) {
         event.target.mute() // 음소거
       }
     }
   });
 }