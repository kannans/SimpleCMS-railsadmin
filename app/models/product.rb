class Product < ActiveRecord::Base
  attr_accessible :category_id, :expire_date, :is_active, :name, :price, :qty, :cover_image, :remove_cover_image, :retained_cover_image
  belongs_to :category
  image_accessor :cover_image

  validates :name, :price, :qty, :presence => true

end
