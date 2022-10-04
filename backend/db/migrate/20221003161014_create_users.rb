class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :username
      t.string :password
      t.string :saved
      t.string :description
      t.string :link
      t.boolean :visibility
      t.string :first_name
      t.string :last_name
      t.integer :number_of_posts
      t.timestamps
    end
  end
end
