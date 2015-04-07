$(window).load(function() {
  var body = document.getElementsByTagName('body');
  var $viewport = $("html, body");

  $viewport.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e){
    // This identifies the scroll as a user action, stops the animation, then unbinds the event straight after (optional)
    if ( e.which > 0 || e.type === "mousedown" || e.type === "mousewheel" || e.type === "touchstart"){
      $(".Scene-anchor").velocity("stop");
      $viewport.stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup');
    }
  });

  $(".Scene-anchor").velocity("scroll", {
    duration: 2000,
    easing: 'easeInOut'
  }, 2000);
})
