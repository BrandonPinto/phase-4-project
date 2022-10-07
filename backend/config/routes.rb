Rails.application.routes.draw do

  resources :profiles, only: [:show, :index, :create]
  resources :posts, only: [:show, :create, :index, :destroy]
  resources :reposts, only: [:index]
  resources :users, only: [:destroy, :create, :show]

  get '/profile/reposts/:id', to: 'reposts#user_reposts' #works

  get '/post/:id', to: 'posts#show' #works

  get '/profile/:id', to: 'posts#user_posts' #works

  patch '/profile', to: 'users#update'

  get '/me', to: 'users#show'

  post '/profile', to: 'profiles#create'

  get '/homepage', to: 'posts#index' #works

  get '/profiles', to: 'profiles#index' #works

  get '/reposts', to: 'reposts#index' #works

  post '/write', to: 'posts#create'

  post '/login', to: 'users#login' #works

  delete '/delete_account', to: 'users#destroy'

  post '/register', to: 'users#create' #works

  delete '/posts/:id', to: 'posts#destroy' #works


  # patch '/profile', to: 'posts#update' #to-do

end

