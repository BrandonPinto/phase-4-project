class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :repost_id, :post_id, :first_name, :last_name, :visibility
  belongs_to :user
  has_many :reposts
  has_many :posts
end
