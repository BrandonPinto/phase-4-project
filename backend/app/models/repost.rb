class Repost < ApplicationRecord
    has_many :users
    has_many :posts, through: :users
end
