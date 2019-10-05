class Api::ProductsController < ApplicationController
before_action :set_department

  def index
    render json: @department.products
  end

  def create
    @product = @department.products.new(product_params)
    if @product.save
      render json: @product
    else
      render json: { errors: @products.errors }, status: :unprocessable_entity
    end
  end
  def update
    @products = @department.product.find(params[:id])
  end
  def destroy
    @department.product.find(params[:id]).destroy
    render json: { message: 'product deleted'}
  end
  private
    def product_params
      params.require(:product).permit(:name)
    end

    def set_department
      @department = Department.find(params[:department_id])
    end
 end
