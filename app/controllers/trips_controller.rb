class TripsController < ApplicationController
  def index
    @trips = current_user.trips.all
  end

  def new
    @trip = current_user.trips.new
  end

  def create
    @trip = current_user.trips.new
    if @trip.update(trip_params)
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def trip_params
    params.require(:trip).permit(:date, :city, :completed)
  end
end