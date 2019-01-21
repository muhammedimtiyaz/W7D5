class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    # debugger
    if @user
      login(@user)
      # debugger
      render "/api/users/show"
    else
      render json: ["Invalid credentials"], status: 422
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ["Nobody is signed in"], status: 422
    end
  end
end