class CarMakesController < ApplicationController
    def show
        puts "HITTING SHOW"
        if params[:id]=="0"
            puts "POST EVERYTHING"
            render json: Post.all
        else
            puts "SHOW ME WHAT IS HERE #{params[:id]}"
            carmake=CarMake.find(params[:id])
            puts "WHAT IS CAR MAKE #{carmake.posts}"
            render json: carmake.posts 
        end
    end
end