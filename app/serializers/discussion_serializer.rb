class DiscussionSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created
  has_many :comments, each_serializer: CommentSerializer
  has_one :user

  def created
    object.created_at.strftime("%m/%d/%Y")
  end
end
