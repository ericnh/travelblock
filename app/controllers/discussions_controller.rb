class DiscussionsController < ApplicationController
  def new
    @discussion = Discussion.new(trip_id: params[:trip_id])
  end
end
