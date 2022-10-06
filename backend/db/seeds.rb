require 'faker'

User.destroy_all
Post.destroy_all
Repost.destroy_all
Profile.destroy_all

User.create(
    username: "admin",
    email: "apple@gmail.com",
    password: "123456"
)
29.times do |t|
User.create(
    username: Faker::Music.band, 
    email: Faker::Games::Pokemon.name, 
    password: "123456"
)
end
30.times do |t|
Profile.create(
    user_id: User.all.sample.id,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    image: Faker::Name.first_name
)
end
30.times do |t|
Post.create(
    profile_id: Profile.all.sample.id,
    user_id: User.all.sample.id,
    link: Faker::Music.band,
    image_url: Faker::Vehicle.vin,
    title: Faker::Games::Pokemon.name,
    content: Faker::Superhero.name
)
end
30.times do |t|
Repost.create(
    user_id: User.all.sample.id,
    post_id: Post.all.sample.id,
    profile_id: Profile.all.sample.id
)
end

puts "Seeding done"