require 'rails_helper'

RSpec.describe User, type: :model do
  let! (:users) { create_list(:user, 10) }

  it { should have_many(:clocks) }
  it { should validate_presence_of(:name) }
  it { should validate_length_of(:name) }
  it { should validate_presence_of(:role) }
  it { should validate_length_of(:role) }
end
