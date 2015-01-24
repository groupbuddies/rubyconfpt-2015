$ ->
  $.fn.hoshiInput = ->
    $(this).on 'focus', '.InputHoshi-field', (event) ->
      $(event.delegateTarget).addClass('InputHoshi--filled')

    $(this).on 'blur', '.InputHoshi-field', (event) ->
      $target = $(event.delegateTarget)
      if $target.find('.InputHoshi-field').val().length == 0
        $target.removeClass('InputHoshi--filled')


  $('.InputHoshi').hoshiInput()
