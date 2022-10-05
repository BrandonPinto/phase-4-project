class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :link
      t.string :image_url
      t.string :title
      t.string :content
      t.boolean :favorite

      t.timestamps
    end
  end
end
