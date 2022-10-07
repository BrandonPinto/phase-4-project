class PostSerializer < ActiveModel::Serializer
  attributes :link, :title, :content
  belongs_to :user
  belongs_to :profile
end
