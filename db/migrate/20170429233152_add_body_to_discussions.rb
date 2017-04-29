class AddBodyToDiscussions < ActiveRecord::Migration[5.0]
  def change
    add_column :discussions, :body, :text
  end
end
