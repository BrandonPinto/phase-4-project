class RepostsController < ApplicationController
    
def index
    render json: Repost.all
end

end
