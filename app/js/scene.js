(function() {
  'use strict';

  $(function() {

    var $document = $(document);

    var $town = $('.Scene-town');
    var $mountains = $('.Scene-mountains');
    var $sun = $('.Scene-sun');
    var $cloudsWrapper = $('.Scene-cloudsWrapper, .Scene-stars');
    var $cloudsBack = $('.Scene-clouds--back');
    var $cloudsFront = $('.Scene-clouds--front');
    var $overlay = $('.SceneOverlay, .Nav-barMenu');

    var allAnimatedElems = [$town, $mountains, $sun, $cloudsWrapper, $cloudsBack, $cloudsFront, $overlay];

    $town.velocity({
      translateZ: 0,
      translateY: ['0%', '100%']
    }, {
      duration: 2000,
      easing: 'easeOutSine'
    });

    $mountains.velocity({
      translateZ: 0,
      translateY: ['0px', '140%']
    }, {
      duration: 2000,
      easing: 'easeOutSine'
    });

    $sun.velocity({
      translateZ: 0,
      translateY: ['0%', '180%']
    }, {
      duration: 2000,
      easing: 'easeOutSine'
    });

    $cloudsWrapper.velocity({
      translateZ: 0,
      opacity: [1, 0]
    }, {
      duration: 5 * 1000,
      easing: 'easeOut'
    });

    $cloudsBack.velocity({
      translateZ: 0,
      translateX: ['0%', '-90%']
    }, {
      duration: 700 * 1000,
      easing: 'linear',
      queue: false
    });
    $cloudsFront.velocity({
      translateZ: 0,
      translateX: ['0%', '-90%']
    }, {
      duration: 400 * 1000,
      easing: 'linear',
      queue: false
    });

    $overlay.velocity({
      translateZ: 0,
      opacity: 1
    }, {
      duration: 2000,
      delay: 2000,
      ease: 'easeInOut'
    })

    console.log(getUrlParameter('no-anim'));
    if ($document.scrollTop() > 100
        || getUrlParameter('no-anim')
        || $('.Nav').hasClass('Nav--alwaysOpaque')) {
      allAnimatedElems.forEach(function(elem) {
        elem.velocity('finish');
      })
    }

    function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1);
      var sURLVariables = sPageURL.split('&');
      for (var i = 0; i < sURLVariables.length; i++)  {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
          return sParameterName[1];
        }
      }
    }
  });
})();
