class Api::DepartmentsController < ApplicationController
  def index
    render json: Department.all
  end
  def create
    @Department = Department.new(department_params)
    if @department.save
      render json: @department
    else
      render json: { errors: @departments.errors }, status: :unprocessable_entity
    end
  end
  def update
    @departments = Department.find(params[:id])
  end
  def destroy
    Department.find(params[:id]).destroy
    render json: { message: 'Department deleted'}
  end
  private
    def department_params
      params.require(:department).permit(:name)
    end
 end