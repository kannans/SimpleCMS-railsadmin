class Category < ActiveRecord::Base
  attr_accessible :active, :description, :name
  has_many :products
  validates :name , :presence => true
end
