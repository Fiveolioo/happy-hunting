class CarMakesController < ApplicationController
    def show
        if params[:id]=="0"
            render json: Post.all
        else
            category=CarMake.find(params[:id])
            render json: carmake.posts 
        end
    end
end