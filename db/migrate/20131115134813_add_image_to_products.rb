class AddImageToProducts < ActiveRecord::Migration
  def change
  	add_column :products, :cover_image_uid,  :string
	add_column :products, :cover_image_name, :string  # Optional - only if you want urls
  end
end
