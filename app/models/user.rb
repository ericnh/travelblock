class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :trip_members
  has_many :trips, through: :trip_members
  has_many :created_trips, foreign_key: 'creator_id', class_name: 'Trip'
end
