class Discussion < ApplicationRecord
  belongs_to :trip
  belongs_to :user
  has_many :comments, as: :commentable
end
