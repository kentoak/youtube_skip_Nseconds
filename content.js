// var actualCode = '(' + function() {
//   //const player = document.querySelector('ytd-player').getPlayer();
//   // const player = document.getElementsByTagName("ytd-player")[0].getPlayer();

//   // const seconds = 2;
//   // window.addEventListener('keydown', function (e) {
//   //   if (e.ctrlKey) {
//   //     if (e.key === 37) {
//   //       window.alert("taoka")
//   //       player.seekToStreamTime(player.getCurrentTime() - seconds)
//   //     }
//   //     else if (e.key === 39) {
//   //       player.seekToStreamTime(player.getCurrentTime() + seconds)
//   //     }
//   //   }
//   // })

//   // function getPlayer() {
//   //   const elem = document.querySelector('ytd-player');
//   //   if (!elem) {
//   //     console.warn('<ytd-player> not found');
//   //     return null;
//   //   }
//   //   return elem.wrappedJSObject.getPlayer();
//   // }

//   // V_YOUTUBE_PLAYER = getPlayer();
//   // console.log(V_YOUTUBE_PLAYER)
//   // console.log("これ！！！！！！")
//   // V_SECONDS = 2;
//   // //console.log(document.querySelector('ytd-player').getPlayer().getCurrentTime())
//   // function backwardXSeconds(seconds) {
//   //   V_YOUTUBE_PLAYER.seekToStreamTime(V_YOUTUBE_PLAYER.getCurrentTime() - seconds);
//   // }
//   // function forwardXSeconds(seconds) {
//   //   V_YOUTUBE_PLAYER.seekToStreamTime(V_YOUTUBE_PLAYER.getCurrentTime() + seconds);
//   // }

//   // try {
//   //   window.removeEventListener('keydown', v_backward_listener);
//   //   window.removeEventListener('keydown', v_forward_listener);
//   // } catch (e) {}

//   // v_backward_listener = function(e) {
//   //   if (e.keyCode === 221 && e.ctrlKey) {
//   //     backwardXSeconds(V_SECONDS);
//   //   }
//   // }

//   // v_forward_listener = function(e) {
//   //   if (e.keyCode === 219 && e.ctrlKey) {
//   //     forwardXSeconds(V_SECONDS);
//   //   }
//   // }
//   // window.addEventListener('keydown', v_backward_listener);
//   // window.addEventListener('keydown', v_forward_listener);
//   const V_SECONDS = 1;

//   document.addEventListener('yt-navigate-finish',onNavigate);
//   var onKeyDown;

//   var player = document.querySelector('#ytd-player') || document.querySelector('#player');
//         // 如果播放器的设置不在可视区域，就停止自动开启翻译

//   function onNavigate() {
//     if (window.location.toString().match(/\/watch/)) {

//       var V_YOUTUBE_PLAYER = player.getPlayer();
//       try {
//         window.removeEventListener('keydown', onKeyDown);
//       } catch (e) {}

//       onKeyDown = function(e) {
//         if (e.code === 'Comma' && e.ctrlKey) {
//           V_YOUTUBE_PLAYER.seekBy(-V_SECONDS);
//           // if (this.elements.player){
//           //   this.elements.player.seekBy(-V_SECONDS);
//           // }
//         } else if (e.code === 'Period' && e.ctrlKey) {
//           //V_YOUTUBE_PLAYER.seekBy(V_SECONDS);
//           if (this.elements.player){
//             this.elements.player.seekBy(V_SECONDS);
//           }
//         }
//       }

//       window.addEventListener('keydown', onKeyDown);

//     } else {

//       if (onKeyDown) {
//         window.removeEventListener('keydown', onKeyDown);
//         onKeyDown = null;
//       }

//     }
//   }
// } + ')();';
// var script = document.createElement('script');
// script.textContent = actualCode;
// (document.head||document.documentElement).appendChild(script);
// script.remove();

(function() {
  var skip2s = function(evt) {
    const video = document.getElementsByClassName('video-stream html5-main-video')[0];
      if (evt.keyCode === 221) {
          video.currentTime-=2
  }
      if (evt.keyCode === 219) {
          video.currentTime+=2
  }
  }
  document.addEventListener("keydown", skip2s, false);
})();