class UsersController < ApplicationController
    def index
        render json: {status:'IN'}
    end

    def myPosts
        render json: current_user.posts
    end

    def create  
        user=User.new(user_params)
        if user.save
           render json: {logged_in: true, user:user}
        else
            render json: {logged_in: false, errors:user.errors.full_messages}
        end
    end

    private

    def user_params
        params.require(:user).permit(:firstName, :lastName, :username, :email, :password, :phone_number)
    end
end