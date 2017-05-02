class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :trip_members
  has_many :discussions
  has_many :trips, through: :trip_members
  has_many :created_trips, foreign_key: 'creator_id', class_name: 'Trip'

  def User.fuzzy_search(query_string)
    q = query_string.downcase
    User.where("first_name ILIKE '%#{q}%' OR last_name ILIKE '%#{q}%' OR email ILIKE '%#{q}%'").limit(100)
  end
end
