class Post < ApplicationRecord
    has_many :reposts
    has_many :users, through: :reposts
end
