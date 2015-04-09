(function() {
  'use strict';

  var $window = $(window);
  var $nav = $('#Nav');
  var $checkbox = $('#Nav-checkbox')
  $window.on('scroll', setNavClass);
  $checkbox.on('change', setWindowScroll);

  function setNavClass(event) {
    console.log($window.scrollTop());
    if ($window.scrollTop() > 100) {
      $nav.addClass('Nav--scrolled');
    } else {
      $nav.removeClass('Nav--scrolled');
    }
  };

  function setWindowScroll(event) {
    if (this.checked) {
      $('body, html').css('overflow', 'hidden');
    } else {
      $('body, html').css('overflow', 'auto');
    }
  }
})();
