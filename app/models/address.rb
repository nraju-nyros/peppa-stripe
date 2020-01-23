class Address < ApplicationRecord
	belongs_to :user
	has_many :orders

	validates_presence_of  :full_name,message:"can't be empty"
  validates_presence_of  :mobile, message:"can't be empty", :presence => true,:numericality => true
  validates_presence_of  :pincode, message:"can't be empty", :presence => true,:numericality => true
  validates_presence_of  :house_no,message:"can't be empty"
  validates_presence_of  :street,message:"can't be empty"
  validates_presence_of  :landmark,message:"can't be empty"
  validates_presence_of  :city,message:"can't be empty"
  validates_presence_of  :state,message:"can't be empty"
end
