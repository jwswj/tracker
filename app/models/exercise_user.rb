class Exercise_User < ActiveRecord::Base
  belongs_to :user
  belongs_to :exercise
  has_many :activities, :dependent => :destroy
end