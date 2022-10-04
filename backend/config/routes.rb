Rails.application.routes.draw do
  get '/login', to: 'sessions#login'
  post '/login', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: "users#create"
  get '/profile', to: "profiles#show"
  get '/profile/reposts', to: "reposts#show"
  post '/profile/favorites', to: "saved_links#create"




  resources :reposts, only: [:show]
  resources :saved_links, only: [:create]
  resources :profiles, only: [:show]
  resources :posts, only: [:show, :create]
  resources :users, only: [:index, :create, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
