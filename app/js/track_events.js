$(function() {
  'use strict';

  trackMenuClick();

  analytics.trackForm($('.Nav form'), 'Subscribed Newsletter in the menu', getFormProperties);
  analytics.trackForm($('.Newsletter form'), 'Subscribed Newsletter in the main content', getFormProperties);

  $('[data-track-link]').each(function() {
    var $element = $(this);
    analytics.trackLink($element, $element.data('trackLink'));
  });

  $('[data-track-link-mailto]').each(function() {
    var $element = $(this);
    analytics.trackLink($element, $element.data('trackLinkMailto'), getMailFromMailTo);
  });

  function trackMenuClick() {
    $('#BurgerBtn')
      .on('menu-opened', function(event) {
        analytics.track('Opened main menu');
      })
      .on('menu-closed', function(event) {
        analytics.track('Closed main menu');
      });
  }

  function getMailFromMailTo(element) {
    var href = $(element).attr('href');
    return { email: href.substring('mailto:'.length) };
  }

  function getFormProperties(element) {
    var data = {};
    $(element).serializeArray().forEach(function(x) {
      data[x.name] = x.value;
    })
    return data;
  }
});
