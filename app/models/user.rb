class User < ApplicationRecord
  has_many :clocks
  validates :name, presence: true, length: { minimum: 3, maximum: 100 }
  validates :role, presence: true, length: { minimum: 3, maximum: 100 }
end
