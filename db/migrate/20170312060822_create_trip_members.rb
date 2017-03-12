class CreateTripMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :trip_members do |t|
      t.references :user, foreign_key: true
      t.references :trip, foreign_key: true

      t.timestamps
    end
  end
end
