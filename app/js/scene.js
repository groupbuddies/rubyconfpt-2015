// $(window).load(function() {
//   var body = document.getElementsByTagName('body');
//   var $window = $(window)
//   var $viewport = $("html, body");
//   var $scene = $('#Scene')
//   var $overlay = $('#SceneOverlay, #Scene-sun')
//   var $anchor = $('#Scene-anchor')
//   var overlayBreakpoint;

// //   $viewport.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e){
// //     // This identifies the scroll as a user action, stops the animation, then unbinds the event straight after (optional)
// //     if ( e.which > 0 || e.type === "mousedown" || e.type === "mousewheel" || e.type === "touchstart"){
// //       $anchor.velocity("stop");
// //       $viewport.stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup');
// //     }
// //   });

//   // $anchor.velocity('scroll', {
//   //   duration: 2000,
//   //   // delay: 1000,
//   //   offset: -$(window).height(),
//   //   easing: 'easeInOutQuad'
//   // });

//   // $overlay.velocity('fadeIn', {
//   //   duration: 2000
//   //   // delay: 3000
//   // });

//   $window.on('scroll', resetOverlayPosition);
//   $window.on('resize', resetBreakpoint)
//   resetBreakpoint();
//   resetOverlayPosition();

//   function resetOverlayPosition(event) {
//     if ($window.scrollTop() >= overlayBreakpoint) {
//       $overlay.css('position', 'absolute')
//     } else {
//       $overlay.css('position', 'fixed')
//     }
//   }

//   function resetBreakpoint() {
//     overlayBreakpoint = $scene.outerHeight(true) - $window.height();
//   }
// })
