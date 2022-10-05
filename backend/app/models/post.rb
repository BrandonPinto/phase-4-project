class Post < ApplicationRecord
    belongs_to :profile
    belongs_to :user
    has_many :reposts, through: :profile
end