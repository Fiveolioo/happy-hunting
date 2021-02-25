class Post < ApplicationRecord
    belongs_to :user
    belongs_to :car_make
    has_one_attached :image
end