class Api::V1::DiscussionsController < Api::V1::BaseController
  def trip_index
    respond_with Trip.find(params[:trip_id]).discussions
  end

  def create
    discussion = Discussion.create(discussion_params)
    respond_with discussion, json: discussion
  end

  def update
    discussion = Discussion.find(params[:id])
    discussion.update(discussion_params)
    respond_with discussion, json: discussion
  end

  def destroy
    respond_with Discussion.destroy(params[:id])
  end

  private
  
  def discussion_params
    params.require(:discussion).permit(:id, :title, :body, :trip_id).merge!({user: current_user})
  end
end
