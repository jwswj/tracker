class Exercise < ActiveRecord::Base
  attr_accessible :title, :users
  has_and_belongs_to_many :users
end
