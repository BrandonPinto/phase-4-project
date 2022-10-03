class RepostSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :user_id, :profile_id
end
