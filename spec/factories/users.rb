FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    role { Faker::Job }
  end
end