class CarmakesController < ApplicationController
    def show
        if params[:id]=="0"
            puts "POST EVERYTHING"
            render json: Post.all
        else
            carmake=Carmake.find(params[:id])
            puts "WHAT IS CAR MAKE #{carmake.posts}"
            render json: carmake.posts 
        end
    end
end