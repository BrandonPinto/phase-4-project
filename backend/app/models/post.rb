class Post < ApplicationRecord
    belongs_to :profile
    belongs_to :user, dependent: :destroy
    has_many :reposts, through: :profile

    validates :link, :title, :content, :profile_id, :user_id, presence: true
    validates :title, length: { maximum: 25 }
    validates :content, length: { maximum: 500 }
end