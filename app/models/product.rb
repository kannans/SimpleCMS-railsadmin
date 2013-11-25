class Product < ActiveRecord::Base
  attr_accessible :category_id, :expire_date, :is_active, :name, :price, :qty, :cover_image, :remove_cover_image, :retained_cover_image
  belongs_to :category
  image_accessor :cover_image

  validates :name, :price, :qty, :presence => true

  after_save :update_inventory

  def to_s
  	name
  end

  def update_inventory
  	inv = Inventory.find_by_product_id(self.id)
  	if inv.nil?
  	  Inventory.create(:product_id=>self.id, :total_products=>self.qty)
  	else
  	  inv.update_attributes(:total_products => self.qty)
  	end
  end

end
