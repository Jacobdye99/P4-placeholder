Rails.application.routes.draw do
  resources :reviews do
    resources :comments
  end
  resources :users do
    resources :favorites
  end

  get '/users/:user_id/favorites', to: 'favorites#get_user_favorites'
  get '/users/:user_id/reviews', to: 'reviews#get_user_reviews'
  get '/reviews', to: 'reviews#get_all_reviews'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  # Defines the root path route ("/")
  # root "articles#index"
end
