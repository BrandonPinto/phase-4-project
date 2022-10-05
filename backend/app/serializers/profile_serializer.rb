class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :repost_id, :post_id, :first_name, :last_name, :visibility, :show_reposts
  has_many :posts
  def show_reposts
    object.reposts
  end
end
