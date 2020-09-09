Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :index]
      get 'user/:id', to: 'users#find_user'
      resources :clocks, only: [:create, :index, :show]
      get '/clocks/user/:id', to: 'clocks#list_clocks_by_user'
      get '/user/:user_id/clock/:id', to: 'clocks#list_clock'
    end
  end
end
