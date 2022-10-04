class RepostSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :user_id, :profile_id
  belongs_to @current_user
end
