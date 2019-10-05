5.times do
  @department = Department.create(
    Faker::Commerce.department 
  )

  10.times do
    product = product.create(
      name: Faker::Commerce.product_name,
      price: Faker::Commerce.price, 
      image: '',
      description: Faker::Dessert.flavor,
      department_id: @department.id
    )
  end
end

puts 'Data Seeded'