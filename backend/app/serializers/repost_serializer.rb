class RepostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :post_id, :profile_id

end
