require 'faker'

User.destroy_all
Post.destroy_all

10.times do |t|
User.create(username: Faker::Name.name, email: Faker::Internet.email, password: Faker::Tea.type)
end
Post.create()


puts "Seeding done"