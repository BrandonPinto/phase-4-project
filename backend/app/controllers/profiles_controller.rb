class ProfilesController < ApplicationController

def index
    render json: Profile.all
end

def show
    profile = Profile.find(params[:id])
    render json: profile, status: :ok
end

def create
    profile = Profile.create!(profile_params)
    render json: profile
end


private
def profile_params
    params.permit(:user_id, :first_name, :last_name, :image)
  end

end
