class Repost < ApplicationRecord
    belongs_to :profile
    belongs_to :post
    belongs_to :user
end
