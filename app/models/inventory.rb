class Inventory < ActiveRecord::Base
  attr_accessible :product_id, :total_products, :total_sold_products, :pending_products

  belongs_to :product

end
