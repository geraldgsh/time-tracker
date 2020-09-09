class Api::V1::ClocksController < ApplicationController
  before_action :set_present_user

  def set_present_user
    present_user = User.first  
  end

  def index
    @clocks = Clock.all
    if @clocks
      render json: {
        code: 200,
        data: Clock.all.as_json
      }
    else
      render json: @clocks.errors
    end
  end

  def create
    @clock = current_user.clocks.build(clock_params)
    if @clock.save
      render json: {
        code: 200
      }
    else
      render json: {
        code: 400,
        errors: @user.errors.messages
      }
    end
  end

  def show
    @clock = Clock.find(params[:id])
    if @clock
      render json: {
        code: 200,
        data: @clock.as_json
      }
    else
      render json: @clock.errors
    end
  end

  def list_clocks_by_user
    @clocklist = Clock.where(user_id: params[:id])
    if @clocklist
      render json: {
        code: 200,
        data: @clocklist.as_json
      }
    else
      render json: @clocklist.errors
    end
  end

  def list_clock
    @clock = Clock.find_by(user_id: params[:user_id], id: params[:id])
    if @clock
      render json: {
        code: 200,
        data: @clock.as_json
      }
    else
      render json: @clock.errors
    end
  end

  private

  def clock_params
    params.require(:clock).permit(
      :clockin,
      :clockout
    )
  end
end
