class Api::V1::DiscussionsController < Api::V1::BaseController
  def trip_index
    respond_with Trip.find(params[:trip_id]).discussions
  end

  def create
    discussion = Discussion.create(discussion_params)
    respond_with discussion, json: discussion
  end

  private
  
  def discussion_params
    params.require(:discussion).permit(:id, :title, :body, :trip_id)
  end
end
