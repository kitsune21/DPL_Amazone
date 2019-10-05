5.times do
  @department = Department.create({
   name: Faker::Commerce.department
 })
  10.times do
    product = Product.create({
      name: Faker::Commerce.product_name,
      price: Faker::Commerce.price,
      image: '',
      description: Faker::Dessert.flavor,
      department_id: @department.id
  })
  end
 end
 puts 'Data Seeded'