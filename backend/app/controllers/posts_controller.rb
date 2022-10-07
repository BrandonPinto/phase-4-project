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
    if user_id

        new_post = Post.create!(content: params[:content], link: params[:link], image_url: params[:image_url], title: params[:title], user_id:user_id)

        render json: new_post
    else
        render json: {error: "401 incorrect token"}, status: 401
    end
end

# PATCH/PUT /posts/1
def update
    token = request.headers["token"]
    user_id = decode_token(token)
    if user_id
        @post.update(post_params)
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

private
# Use callbacks to share common setup or constraints between actions.
def set_post
    @post = Post.find(params[:id])
end

# Only allow a list of trusted parameters through.
def post_params
    params.require(:post).permit(:content, :link, :image_url, :title, :user_id)
end

end

