class PostSerializer < ActiveModel::Serializer
  attributes :link, :image_url, :title, :content, :favorite

end
