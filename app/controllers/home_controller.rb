class HomeController < ApplicationController
  def index
  	@products = Product.all
  end
  def sales
  	@product = Product.find(params[:id])
  end
  def purchase
  	order = OpenStruct.new(params)
  	product = Product.find(order.product)
	product.qty =  product.qty- (order.qty.to_i)
  		inv  = Inventory.find_by_product_id(product.id)
  		inv.total_products 		= inv.total_products - (order.qty.to_i)
  		inv.total_sold_products = inv.total_sold_products + order.qty.to_i
  		inv.save
  		product.save
  		redirect_to root_path, notice: "Product successfully purchased. Thanks!"
  end
end
