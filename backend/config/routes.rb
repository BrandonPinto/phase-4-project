Rails.application.routes.draw do
  get '/login', to: 'sessions#login'
  post '/login', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'
  delete '/logout', to: 'sessions#destroy'
  root to: "posts#index"
  get '/profile/reposts/:id', to: 'users#user_reposts'
  get '/homepage', to: 'posts#index'
  get '/users', to: 'users#index'
  get '/profile', to: 'profiles#show'
  resources :profiles, only: [:show, :index]
  resources :posts, only: [:show, :create, :index]
  resources :reposts, only: [:show, :index]
  resources :users, only: [:create, :show, :index]


  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
