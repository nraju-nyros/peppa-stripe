class CreateWishlists < ActiveRecord::Migration[5.2]
  def change
    create_table :wishlists do |t|
    	t.integer :user_id
    	t.integer :dish_id

      t.timestamps
    end
  end
end
