Rails.application.routes.draw do
  resources :favorites
  resources :comments
  resources :reviews
  resources :users

  get '/users/:user_id/favorites',
  get '/users/:user_id/reviews',
  get '/reviews',
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post '/auth/login',
  get '/auth/verify',
  # Defines the root path route ("/")
  # root "articles#index"
end
