class Activity < ActiveRecord::Base
  attr_accessible :description, :exercise_user_id
  belongs_to :exercise_user, :foreign_key => "exercise_user_id"
end