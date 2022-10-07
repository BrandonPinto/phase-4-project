class ProfilesController < ApplicationController

def index
    render json: Profile.all
end

def show
    token = request.headers["token"]
    user_id = decode_token(token)
    if user_id
    render json: Profile.find(user_id)
    end
end

def create
    # token = request.headers["jwt"]
    # user_id = decode_token(token)
    profile = Profile.create!(profile_params)
    render json: profile
end


private
def profile_params
    params.permit(:user_id, :first_name, :last_name, :image)
  end

end
