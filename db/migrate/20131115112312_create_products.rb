class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :price
      t.date :expire_date
      t.integer :qty
      t.integer :category_id
      t.boolean :is_active

      t.timestamps
    end
  end
end
