require 'rails_helper'

RSpec.describe Clock, type: :model do
  let!(:user) { create(:user) }
  let!(:clocks) { create_list(:clock, 1, user_id: user.id) }
  let(:user_id) { user.id }
  let(:id) { clocks.first.id }

  it { should belong_to(:user) }
  it { should validate_presence_of(:clockin) }
  it { should validate_presence_of(:clockout) }
end
