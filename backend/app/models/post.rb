class Post < ApplicationRecord
    belongs_to :user
    belongs_to :carmake, optional: true
    has_one_attached :image
end