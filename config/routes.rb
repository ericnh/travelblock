Rails.application.routes.draw do
  devise_for :users, controllers: {registrations: 'registrations'}
  authenticated :user do
    root to: 'users#profile'
  end
  root to: 'home#index'
  get '/home', to: 'home#index'
  resources :trip_members
  resources :trips do
    resources :trip_members
    resources :discussions, only: [:new, :create]
  end
  resources :users
  get '/my_profile', to: 'users#profile'
  get '/user_search', to: 'users#search'
  # get 'trips/:trip_id/trip_members/new', to: 'trip_members#new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
