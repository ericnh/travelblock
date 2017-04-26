class Discussion < ApplicationRecord
  belongs_to :trip
  has_many :comments, as: :commentable
end
