# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).on 'turbolinks:load', ->
  $("form[data-remote]").on "ajax:success", (e, data, status, xhr) ->
    $(e.target).closest("tr").remove()
    alert "The trip member was deleted."
