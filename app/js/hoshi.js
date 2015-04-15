$(function() {
  $.fn.hoshiInput = function() {
    $(this).on('focus', '.InputHoshi-field', function(event) {
      $(event.delegateTarget).addClass('InputHoshi--filled')
    });

    $(this).on('blur', '.InputHoshi-field', function(event) {
      $target = $(event.delegateTarget);
      if ($target.find('.InputHoshi-field').val().length == 0) {
        $target.removeClass('InputHoshi--filled');
      }
    });
  }

  $('.InputHoshi').hoshiInput();
})
