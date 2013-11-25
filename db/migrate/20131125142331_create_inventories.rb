class CreateInventories < ActiveRecord::Migration
  def change
    create_table :inventories do |t|
      t.integer :product_id
      t.integer :total_products, :default=>0
      t.integer :total_sold_products, :default=>0
      t.integer :pending_products, :default=>0

      t.timestamps
    end
  end
end
