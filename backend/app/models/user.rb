class User < ApplicationRecord
    has_one :profile
    has_many :posts, through: :profile
    has_many :reposts, through: :profile
    has_secure_password
    # validates :username, :password, :email, presence: true
    # validates :username, uniqueness: { case_sensitive: false}
    # validates :username, length: { maximum: 15, too_long: "No need for such a long username, maximum characters allowed is 15"}
    # validates :username, length: {minimum: 3, too_short: "Username is too short, minimum characters allowed is 3!"}
    # validates :password, length: { minimum: 6, too_short: "Password minimum amount of characters is 6!"}
    # validates :email, uniqueness: true, on: :create

end
