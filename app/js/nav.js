$(function() {
  'use strict';

  var $document = $(document);
  var $nav = $('#Nav');
  var $btn = $('#BurgerBtn');
  $document.on('scroll', setNavClass);
  $btn.on('click tap', toggleMenuWithoutPropagation);
  $nav.on('click tap', '.NavContent a', toggleMenu);

  function setNavClass(event) {
    if ($document.scrollTop() > 100) {
      $nav.addClass('Nav--scrolled');
    } else {
      $nav.removeClass('Nav--scrolled');
    }
  }

  function toggleMenuWithoutPropagation(event) {
    event.preventDefault();
    toggleMenu(event);
  }

  function toggleMenu(event) {
    $nav.toggleClass('Nav--open');
    $btn.toggleClass('BurgerBtn--open');

    if ($nav.hasClass('Nav--open')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'visible');
    }
  }

  function toogleMenuAndFollow(event) {

  }
});
