class PostsController < ApplicationController

def show
    post = Post.find(id: params[:id])
    render json: post
end
def user_posts
    user = User.find_by!(id: params[:id])
    render json: user
  end

def create
    post = Post.create!(post_params)
    render json: post
end

def index
    post = Post.all
    render json: post
end

private
def post_params
    params.permit(:title, :content, :link, :image_url)
end

end
