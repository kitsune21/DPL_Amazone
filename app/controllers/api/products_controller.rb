class Api::ProductsController < ApplicationController
  def index
    render json: Product.all
  end
  def create
    @product = Product.new(product_params)
    if @product.save
      render json: @product
    else
      render json: { errors: @products.errors }, status: :unprocessable_entity
    end
  end
  def update
    @products = Product.find(params[:id])
  end
  def destroy
    Product.find(params[:id]).destroy
    render json: { message: 'product deleted'}
  end
  private
    def product_params
      params.require(:product).permit(:name)
    end
 end
