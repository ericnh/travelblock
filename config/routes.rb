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
  end
  get '/trips/:id/discussions', to: 'trips#discussions'
  get '/trips/:id/activities', to: 'trips#activities'
  get '/trips/:id/schedules', to: 'trips#schedules'
  get '/trips/:id/information', to: 'trips#information'
  resources :users
  get '/my_profile', to: 'users#profile'
  get '/user_search', to: 'users#search'

  namespace :api do
    namespace :v1 do
      get 'trips/:trip_id/discussions', to: 'discussions#trip_index'
      resources :discussions, only: [:create, :destroy, :update]
      get ':commentable_type/:commentable_id/comments', to: 'comments#commentable_index'
      resources :comments, only: [:create, :destroy, :update]
    end
  end
end
