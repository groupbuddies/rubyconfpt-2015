$(function() {
  'use strict';

  var $document = $(document);
  var $nav = $('#Nav');
  var $btn = $('#BurgerBtn');
  $document.on('scroll', setNavClass);
  $btn.on('click tap', toggleMenuWithoutPropagation);
  $nav.on('click tap', '.NavContent a', toggleMenu);
  setNavClass();

  function setNavClass(event) {
    var scroll = $document.scrollTop();
    if (scroll > 100 && !$nav.hasClass('Nav--scrolled')) {
      $nav.addClass('Nav--scrolled');
    } else if (scroll <= 100 && $nav.hasClass('Nav--scrolled')){
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

    if ($btn.hasClass('BurgerBtn--open')) {
      $btn.trigger('menu-opened');
    } else {
      $btn.trigger('menu-closed');
    }
  }

  function toogleMenuAndFollow(event) {

  }
});
