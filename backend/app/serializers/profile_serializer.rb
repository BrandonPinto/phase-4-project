class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :visibility, :first_name, :last_name, :number_of_posts, :post_id, :repost_id
end
