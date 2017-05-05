class Api::V1::CommentsController < Api::V1::BaseController
  def commentable_index
    respond_with Comment.where(commentable_id: params[:commentable_id], commentable_type: params[:commentable_type])
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
  
  def comment_params
    params.require(:comment).permit(:id, :body, :commentable_id, :commentable_type).merge!({user: current_user})
  end
end
