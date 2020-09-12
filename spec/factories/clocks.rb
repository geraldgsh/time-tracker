FactoryBot.define do
  factory :clock do
    clockin { Faker::Time }
    clockout { Faker::Time }
    user_id { Faker::Number.between(from: 1, to: 10) }
  end
end
