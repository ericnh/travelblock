class CreateDiscussions < ActiveRecord::Migration[5.0]
  def change
    create_table :discussions do |t|
      t.string :title
      t.references :trip, foreign_key: true

      t.timestamps
    end
  end
end
