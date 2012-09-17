class User < ActiveRecord::Base

  attr_accessible :email, :name, :phone, :exercises
  has_and_belongs_to_many :exercises
  has_many :activities

  accepts_nested_attributes_for :exercises, :allow_destroy => :true,
    :reject_if => proc { |attrs| attrs.all? { |k, v| v.blank? } }
end
