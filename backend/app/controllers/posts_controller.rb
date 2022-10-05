class PostsController < ApplicationController

def show
    post = Post.find(id: session[:id])
    post.find(id: params[:post_id])
    render json: post
end

def create
    post = Post.create!(post_params)
    render json: post
end

def index
    render json: Post.all
end

private
def post_params
    params.permit(:title, :content, :link, :image_url)
end

end
