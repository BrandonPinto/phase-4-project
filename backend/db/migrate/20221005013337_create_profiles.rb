class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.integer :user_id
      t.integer :repost_id
      t.integer :post_id
      t.string :first_name
      t.string :last_name
      t.boolean :visibility

      t.timestamps
    end
  end
end
