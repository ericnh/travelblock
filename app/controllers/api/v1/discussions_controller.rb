class Api::V1::DiscussionsController < Api::V1::BaseController
  def trip_index
    respond_with Trip.find(params[:trip_id]).discussions
  end
end
