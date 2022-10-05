class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: [:create]
  def index
    render json: User.all
  end
  def user_reposts
    user = User.find_by!(id: params[:id])
    render json: user
end

  # def create
  #   user = User.create!(user_params)
  #   if user.valid?
  #     render json: user, status: 202
  #   else
  #     render json: { error: 'Not Valid' }, status: :unprocessable_entity
  #   end
  # end
  # def show
  #   user = User.find_by(id: session[:user_id])
  #   if user
  #     render json: user
  #   else
  #     render json: {error: 'Not Authorized'}, status: 404
  #   end
  # end
def create
  user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id 
      render json: user, status: :ok
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
end

def show
  @current_user = User.find(session[:user_id])
  render json: @current_user
end

  private
  def user_params
    params.permit(:email, :username, :password)
  end
end