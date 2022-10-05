require 'faker'

User.destroy_all
Post.destroy_all
Repost.destroy_all
Profile.destroy_all

29.times do |t|
User.create(
    username: Faker::Name.name, 
    email: Faker::Internet.email, 
    password: Faker::Artist.name
)
end
User.create(
    username: "admin",
    email: "apple@gmail.com",
    password: "123"
)
30.times do |t|
Post.create(
    user_id: User.all.sample.id,
    link: Faker::Music.band,
    image_url: Faker::Vehicle.vin,
    title: Faker::Games::Pokemon.name,
    content: Faker::Superhero.name,
    favorite: true
)
end
30.times do |t|
Repost.create(
    user_id: User.all.sample.id,
    post_id: Post.all.sample.id
)
end
30.times do |t|
Profile.create(
    user_id: User.all.sample.id,
    post_id: Post.all.sample.id,
    repost_id: Repost.all.sample.id,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    visibility: false
)
end
puts "Seeding done"