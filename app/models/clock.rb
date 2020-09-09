class Clock < ApplicationRecord
  belongs_to :user
  validates :clockin, presence: true
  validates :clockout, presence: true
end