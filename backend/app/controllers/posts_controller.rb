class PostsController < ApplicationController
before_action :set_post, only: %i[ show update destroy ]

def index
    @posts = Post.all

    render json: @posts
end

def show
    render json: @post
end

def user_posts
    user = User.find_by!(id: params[:id])
    render json: user
end

# POST /posts
def create
    token = request.headers["token"]
    user_id = decode_token(token)
    if token
        new_post = Post.create!(content: params[:content],link: params[:link],title: params[:title], profile_id: user_id, user_id: user_id)
        render json: new_post
    else
        render json: {error: "Invalid Token"},status: 404
    end
    end
end


# PATCH/PUT /posts/1
def update
    token = request.headers["token"]
    user_id = decode_token(token)
    if user_id
        @post.update(content: params[:content],link: params[:link], title: params[:title])
        render json: @post
    else
        render json: @post.errors, status: :unprocessable_entity
    end
end

# DELETE /posts/1
def destroy
    token = request.headers["token"]
    user_id = decode_token(token)
    if user_id
    @post.destroy
    end
end

private
# Use callbacks to share common setup or constraints between actions.
def set_post
    @post = Post.find(params[:id])
end

# Only allow a list of trusted parameters through.
def post_params
    params.permit(:content, :link, :title, :user_id, :profile_id)
end



