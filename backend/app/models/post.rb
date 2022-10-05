class Post < ApplicationRecord
    belongs_to :user
    has_many :users
    has_many :reposts, through: :users
    
end