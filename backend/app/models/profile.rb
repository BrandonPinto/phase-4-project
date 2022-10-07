class Profile < ApplicationRecord
    belongs_to :user
    has_many :reposts
    has_many :posts

    # validates :first_name, :last_name, :image, presence: true
end
