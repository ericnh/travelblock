# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$ ->
  $('#searchForUser').on 'keypress', (e) ->
    if e.which == 13
      searchString = $(e.currentTarget).val()
      searchString = encodeURIComponent(searchString)
      $.ajax(
        url: "/user_search?query=#{searchString}"
        success: (users) ->
          $("#found-users").html('')
          $(users).each (index, user) ->
            $("#found-users").append("<a class='list-group-item js-user-result' data-user-id='#{user.id}'><span class='glyphicon glyphicon-user'></span>   #{user.first_name} #{user.last_name}</a>")
            $('.js-user-result').on 'click', (e) ->
              $.ajax(
                url: "/trip_members"
                method: "POST"
                data:
                  trip_id: $(e.currentTarget).parent().data('trip-id')
                  user_id: $(e.currentTarget).data('user-id')
                success: (user) ->
                  $(e.currentTarget).append("<span class='badge'>!!!</span>")
              )
      )
