class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: :create
  def index
    render json: User.all
  end
  def create
    user = User.create(user_params)
    if user.valid?
        session[:user_id] = user.id
        render json: user
    else
      render json: {error: 'Sign-up attempt failed'}, status: :unprocessable_entity
    end
  end
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: {error: 'Not Authorized'}, status: 404
    end
  end
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end
  def show
    @current_user = User.find(session[:user_id])
    render json: @current_user
  end
def index
  if 
  session[:user_id] = @current_user
  saved_link = SavedLink.all
  render json: saved_link
  else
  render json: saved_link, status: :ok
end
def create
  if 
  session[:user_id] = @current_user
  saved_link = SavedLink.create!(link_params)
  render json: saved_link, status: :created
  else
      render json: {errors: "One or more fields are invalid"}, status: :unprocessable_entity
  end

end
  private
  def user_params
    params.permit(:email, :username, :password)
  end
end
# profile controller
# def show
#   profile = Profile.find_by(id: sessions[:id])
#       if profile = @current_user
#           render json: profile
#         else
#           render json: {error: 'Could not find'}, status: 404
#         end


# saved_links controller
# def index
#   if 
#   session[:user_id] = @current_user
#   saved_link = SavedLink.all
#   render json: saved_link
#   else
#   render json: saved_link, status: :ok
# end
# def create
#   if 
#   session[:user_id] = @current_user
#   saved_link = SavedLink.create!(link_params)
#   render json: saved_link, status: :created
#   else
#       render json: {errors: "One or more fields are invalid"}, status: :unprocessable_entity
#   end

# end


# private

# def link_params
#   params.permit(:name, :link, :description)
# end