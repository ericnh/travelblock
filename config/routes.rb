Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'
  resources :trip_members
  resources :trips
  resources :users
  get '/my_profile', to: 'users#profile'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
