class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :link, :image_url, :title, :content, :favorite
end
