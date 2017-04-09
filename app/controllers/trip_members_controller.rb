class TripMembersController < ApplicationController
  before_action :set_trip_member, only: [:destroy]
  before_action :authenticate_user!

  def new
    @trip = Trip.find(params[:trip_id])
  end

  def create
    @trip_member = TripMember.find_by(user_id: params[:user_id], trip_id: params[:trip_id])
    @trip_member ||= TripMember.create(user_id: params[:user_id], trip_id: params[:trip_id])
    render json: @trip_member
  end

  def destroy
    @trip_member.destroy
    head :no_content
  end

  private

  def set_trip_member
    @trip_member = TripMember.find(params[:id])
  end
end
