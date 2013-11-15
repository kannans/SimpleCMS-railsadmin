class Product < ActiveRecord::Base
  attr_accessible :category_id, :expire_date, :is_active, :name, :price, :qty
  belongs_to :category

  validates :name, :price, :qty, :presence => true

end
