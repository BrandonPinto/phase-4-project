class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :link, :image_url, :title, :content, :favorite
  belongs_to :user
end
