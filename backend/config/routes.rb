Rails.application.routes.draw do

  resources :profiles, only: [:show, :index, :create]
  resources :posts, only: [:show, :create, :index]
  resources :reposts, only: [:index]
  resources :users

  get '/profile/reposts/:id', to: 'reposts#user_reposts' #works

  get '/post/:id', to: 'posts#show' #works

  get '/profile/:id', to: 'posts#user_posts' #works

  get '/homepage', to: 'posts#index' #works

  get '/profiles', to: 'profiles#index' #works

  get '/reposts', to: 'reposts#index' #works

  post '/posts', to: 'posts#create'

  post '/login', to: 'users#login' #works

  post '/signup', to: 'users#create' #works

  delete '/posts/:id', to: 'posts#destroy' #works


  # patch '/profile', to: 'posts#update' #to-do

end

