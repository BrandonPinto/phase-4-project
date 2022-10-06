class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]

def index
  @users = User.all

  render json: @users
end

def show
  render json: @user
end

def login
  user = User.find_by(username:params[:username]).try(:authenticate, params[:password])
  if user
    token = generate_token(user.id)
    render json: {user:user, token:token}
  else
    render json: {error:"wrong login info"}, status: 401
  end
end

def profile
  token = request.headers["token"]
  user_id = decode_token(token)
  if user_id
    render json: User.find(user_id)
  else
    render json: {error: "401 incorrect token"}, status: 401
  end
end

def create
  user = User.create!(username: params[:username], email: params[:email], password: params[:password])
  profile = Profile.create!(user_id: user.id, first_name: params[:first_name], last_name: params[:last_name], visibility: params[:visibility])
  render json: {user: user, profile: profile}
end

# def update
#   if @user.update(user_params)
#     render json: @user
#   else
#     render json: @user.errors, status: :unprocessable_entity
#   end
# end

def destroy
  @user.destroy
end

private
  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params.require(:username).permit(:email, :password_digest)
  end

end