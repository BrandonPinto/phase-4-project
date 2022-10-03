class PostSerializer < ActiveModel::Serializer
  attributes :id, :topic, :relevant_link, :body, :like, :comment
end
