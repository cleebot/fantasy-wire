# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all
Article.destroy_all
User.destroy_all

@elijah =
  User.create!(
    username: 'elijah',
    email: 'elijah@elijah.com',
    password: '123456'
  )
@ziyad =
  User.create!(
    username: 'ziyad',
    email: 'ziyad@ziyad.com',
    password: '123456'
  )
@aleks =
  User.create!(
    username: 'aleks',
    email: 'aleks@aleks.com',
    password: '123456'
  )

puts "#{User.count} users created."

@quarterback = Category.create!(name: 'quarterback')
@runningback = Category.create!(name: 'runningback')
@widereceiver = Category.create!(name: 'widereceiver')
@tightend = Category.create!(name: 'tightend')

@format = [@quarterback, @runningback, @widereceiver, @tightend]

puts "#{Category.count} categories created."

Article.create!(
  title: 'top rb',
  content: '<p>cmc will be number 1</p>',
  img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUsUyl4RUmjSSapiotUal9yC7VT2J55lvrw&usqp=CAU',
  @user: @aleks,
  categories: [@runningback]
  )
