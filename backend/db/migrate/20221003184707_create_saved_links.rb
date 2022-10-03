class CreateSavedLinks < ActiveRecord::Migration[7.0]
  def change
    create_table :saved_links do |t|
      t.string :name
      t.string :link
      t.string :description
      t.integer :profile_id

      t.timestamps
    end
  end
end
