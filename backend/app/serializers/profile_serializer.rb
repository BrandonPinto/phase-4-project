class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :first_name, :last_name, :user
  belongs_to :user
  has_many :posts
  has_many :reposts


end
