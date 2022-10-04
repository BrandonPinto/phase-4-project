class User < ApplicationRecord
    has_many :reposts
    has_many :posts, through: :repost
    
    has_secure_password


end
