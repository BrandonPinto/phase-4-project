Rails.application.routes.draw do

  resources :profiles, only: [:show, :index, :create]
  resources :posts, only: [:show, :create, :index]
  resources :reposts, only: [:index]
  resources :users

  get '/profile/reposts/:id', to: 'reposts#user_reposts'

  get '/posts', to: 'posts#index'

  get '/profiles', to: 'profiles#index'

  get '/reposts', to: 'reposts#index'

  get '/homepage', to: 'posts#index' #works

  post '/login', to: 'users#login' #works

  post '/signup', to: 'users#create' #works

  get '/profile/:id', to: 'posts#user_posts' #works
  # patch '/profile', to: 'posts#update' #to-do

  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

end
