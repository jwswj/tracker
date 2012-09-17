class Exercise_User < ActiveRecord::Base
  self.table_name = "exercises_users"
  attr_accessible :exercise, :user, :activities
  belongs_to :user
  belongs_to :exercise
  has_many :activities, :dependent => :destroy
end