class ProfilesController < ApplicationController
def create
    @profile = Profile.new(profile_params)
    @profile.user_id = current_user.id
    @profile.save
    respond_with(@profile)
end

def index
    render json: Profile.all
end

def show
    profile = Profile.find_by!(id: session[:user_id])
    if profile
    render json: profile
    end
end

private
def profile_params
    params.permit(:first_name, :last_name, :visibility)
end

end
