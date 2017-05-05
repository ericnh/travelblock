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

  namespace :api do
    namespace :v1 do
      get 'trips/:trip_id/discussions', to: 'discussions#trip_index'
      resources :discussions, only: [:create, :destroy, :update]
      get ':commentable_type/:commentable_id/comments', to: 'comments#commentable_index'
    end
  end
end
