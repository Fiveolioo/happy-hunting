class PostsController < ApplicationController
    def index
        @posts=Post.all
        render json:@posts
    end

    def create
        post=Post.new(post_params)

        if post.save
            render json: post
        else
            puts "Create Post error: #{post.errors.full_messages}"
            render json:{error:'INVALID'}
        end
    end

    def update
        post=Post.find(params[:post][:id])
        if post.update(post_params)
            render json: post
        else
            puts "Edit Post error: #{post.errors.full_messages}"
            render json:{error:'INVALID'}
        end
    end

    def destroy
        post=Post.find(params[:id])
        post.destroy
        render json: {id:post.id}
    end

    private
    def post_params
        params.require(:post).permit(:title, :description, :price, :user_id, :carmake_id, :image)
    end
end