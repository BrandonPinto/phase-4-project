class PostsController < ApplicationController
    def show
        post = Post.find_by!(id: params[:id])
        render json: post
    end
    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end





private
def post_params
    params.permit(:title, :description, :topic, :relevant_link)
end

end
