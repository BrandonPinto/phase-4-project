class SavedLinkSerializer < ActiveModel::Serializer
  attributes :id, :name, :link, :description, :profile_id
end
