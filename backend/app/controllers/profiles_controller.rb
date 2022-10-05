class ProfilesController < ApplicationController

def index
    render json: Profile.all
end

def show
    profile = Profile.find(params[:id])
    render json: profile, status: :ok
end


private
def profile_params
    params.permit(:first_name, :last_name, :visibility)
  end

end
