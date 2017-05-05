class Api::V1::CommentsController < Api::V1::BaseController
  def commentable_index
    respond_with Comment.where(commentable_id: params[:commentable_id], commentable_type: params[:commentable_type]).order(:created_at)
  end

  def create
    comment = Comment.create(comment_params)
    respond_with comment, json: comment
  end

  def update
    comment = Comment.find(params[:id])
    comment.update(comment_params)
    respond_with comment, json: comment
  end

  def destroy
    respond_with Comment.destroy(params[:id])
  end

  private
  
  def comment_params
    params.require(:comment).permit(:id, :body, :commentable_id, :commentable_type).merge!({user: current_user})
  end
end
