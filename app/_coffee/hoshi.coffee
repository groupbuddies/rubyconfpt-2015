$ ->
  $.fn.hoshiInput = ->
    $(this).on 'focus', '.InputHoshi-field', (event) ->
      $(event.delegateTarget).addClass('InputHoshi--filled')

    $(this).on 'blur', '.InputHoshi-field', (event) ->
      if $(event.delegateTarget).find('.InputHoshi-field').val().length == 0
        $(event.delegateTarget).removeClass('InputHoshi--filled')


  $('.InputHoshi').hoshiInput()
