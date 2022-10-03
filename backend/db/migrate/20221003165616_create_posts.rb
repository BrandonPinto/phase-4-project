class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :topic
      t.string :relevant_link
      t.string :body
      t.integer :like
      t.string :comment

      t.timestamps
    end
  end
end
