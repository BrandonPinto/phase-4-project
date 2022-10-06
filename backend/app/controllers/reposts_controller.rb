class RepostsController < ApplicationController
    
def index
    render json: Repost.all
end
def user_reposts
    repost = Repost.find_by!(id: params[:id])
    render json: repost
  end
end
