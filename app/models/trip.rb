class Trip < ApplicationRecord
  belongs_to :creator, class_name: "User"
  has_many :trip_members, dependent: :destroy
  has_many :discussions
  has_many :users, through: :trip_members

  after_create :make_creator_trip_member

  private
  
  def make_creator_trip_member
    TripMember.create(user: creator, trip: self)
  end
end
