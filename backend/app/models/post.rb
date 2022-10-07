class Post < ApplicationRecord
    belongs_to :profile
    belongs_to :user
    has_many :reposts, through: :profile

    # validates :link, :image_url, :title, :content, presence: true
    # validates :title, length: { maximum: 25 }
    # validates :content, length: { maximum: 500 }
end