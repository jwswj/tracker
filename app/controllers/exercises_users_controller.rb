class ExercisesUsersController < ApplicationController

  # GET /exercisesUsers/1
  # GET /exercisesUsers/1.json
  def index
    @exercises_users = Exercise_User.first

    logger.debug "Everything! #{@exercises_users.inspect}"

    logger.debug @exercises_users.user.inspect
    logger.debug @exercises_users.exercise.inspect
    logger.debug @exercises_users.activites

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @exercises_users }
    end
  end

end