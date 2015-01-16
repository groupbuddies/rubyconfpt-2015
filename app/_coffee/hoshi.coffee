$ ->
  $.fn.hoshiInput = ->
    $(this).on 'focus', '.InputHoshi-field', (event) ->
      $(event.delegateTarget).addClass('InputHoshi--filled')

    $(this).on 'blur', '.InputHoshi-field', (event) ->
      $(event.delegateTarget).removeClass('InputHoshi--filled')


  $('.InputHoshi').hoshiInput()
