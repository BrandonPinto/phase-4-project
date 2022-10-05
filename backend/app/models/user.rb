class User < ApplicationRecord
    has_many :posts
    has_many :reposts
    has_one :profile
    has_secure_password
end
