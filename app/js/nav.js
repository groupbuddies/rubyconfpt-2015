$(function() {
  'use strict';

  var $document = $(document);
  var $nav = $('#Nav');
  var $btn = $('#BurgerBtn');
  $document.on('scroll', setNavClass);
  $btn.on('click', toggleMenu);

  function setNavClass(event) {
    if ($document.scrollTop() > 100) {
      $nav.addClass('Nav--scrolled');
    } else {
      $nav.removeClass('Nav--scrolled');
    }
  }

  function toggleMenu() {
    $nav.toggleClass('Nav--open');
    $btn.toggleClass('BurgerBtn--open');

    if ($nav.hasClass('Nav--open')) {
      $('html, body').css('overflow', 'hidden');
    } else {
      $('html, body').css('overflow', 'visible');
    }
  }
});
