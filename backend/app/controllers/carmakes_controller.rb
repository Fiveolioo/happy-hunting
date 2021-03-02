class CarmakesController < ApplicationController
    def show
        if params[:id]=="0"
            render json: Post.all
        else
            carmake=Carmake.find(params[:id])
            render json: carmake.posts 
        end
    end
end