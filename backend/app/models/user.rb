class User < ApplicationRecord
    validates :firstName, :lastName, :username, :email, :password, presence: true
    validates :username, :email, uniqueness: true
    has_secure_password

    has_many :posts
    has_many :carmakes, through: :posts
end