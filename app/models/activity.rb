class Activity < ActiveRecord::Base
  attr_accessible :description, :exercise_id, :user_id
  belongs_to :exercise
  belongs_to :user
end