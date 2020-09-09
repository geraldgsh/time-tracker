require 'rails_helper'

RSpec.describe 'Clocks', type: :request do
  let!(:user) { create(:user) }
  let!(:clocks) { create_list(:clock, 5, user_id: user.id) }
  let(:user_id) { user.id }
  let(:id) { clocks.first.id }

  describe 'POST /api/v1/clocks' do
    let(:valid_attributes) do
      { 
        clockin: "08:00AM",
        clockout: "05:00PM", 
      }
    end

    context 'when clock entry is made' do
      before { post '/api/v1/clocks', params: valid_attributes }

      it 'returns error code 401 before login' do
        expect(json['code']).to eq(401)
      end
    end
    context 'when the request is invalid' do
      before do
        post '/api/v1/clocks', params: { 
                                          clockin: '',
                                          clockout: "05:00 PM",
                                        }
      end

      it 'return status code 401 before login' do
        expect(json['code']).to eq(401)
      end
    end
  end

  describe 'GET /api/v1/clocks' do
    before { get '/api/v1/clocks' }

    context 'when all clocks are hidden before required login' do
      it 'returns error code 401' do
        expect(json['code']).to eq(401)
      end
    end
  end

  describe 'GET /api/v1/clocks/user/:user_id' do
    before { get "/api/v1/clocks/user/#{user_id}" }

    context 'when users clocks are hidden before required loading' do
      it 'returns error code 401' do
        expect(json['code']).to eq(401)
      end
    end
    context 'when user does not exists' do
      let(:user_id) { 0 }

      it 'returns status code 401' do
        expect(json['code']).to eql(401)
      end
    end
  end

  describe 'GET /api/v1/user/:user_id/clock/:id' do
    before { get "/api/v1/user/#{user_id}/clock/#{id}" }

    context 'when user single clock is hidden before loading' do
      it 'returns status code 401' do
        expect(json['code']).to eq(401)
      end

      context 'when user does not exists' do
        let(:user_id) { 0 }

        it 'returns status code 401' do
          expect(json['code']).to eql(401)
        end
      end
    end
  end
end
