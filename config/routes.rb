Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'
  resources :trip_members
  resources :trips
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
