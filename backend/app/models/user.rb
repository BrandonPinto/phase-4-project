class User < ApplicationRecord
    has_one :profile
    has_many :posts, through: :profile
    has_many :reposts, through: :profile
    has_secure_password
end
