class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.integer :user_id
      t.boolean :visibility
      t.string :first_name
      t.string :last_name
      t.integer :number_of_posts
      t.integer :post_id
      t.integer :repost_id

      t.timestamps
    end
  end
end
