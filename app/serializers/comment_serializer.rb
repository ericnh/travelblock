class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :created, :user

  def created
    object.created_at.strftime("%m/%d/%Y")
  end

  def user
    object.user
  end
end
