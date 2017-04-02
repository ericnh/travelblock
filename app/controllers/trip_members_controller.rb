class TripMembersController < ApplicationController
  def new
    @trip = Trip.find(params[:trip_id])
  end

  def create
    @trip_member = TripMember.find_or_create_by(user_id: params[:user_id], trip_id: params[:trip_id])
    render json: @trip_member
  end
end
