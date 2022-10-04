class RepostsController < ApplicationController
    def show
        repost = Repost.find_by(id: session[:id])
        if repost = @current_user
            render json: report
        else
            render json: {errors: ""}
        end
    end
end
