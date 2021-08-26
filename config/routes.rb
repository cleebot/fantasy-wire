Rails.application.routes.draw do
  resources :categories, only: :index
  resources :articles
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  get '/categories/:category_id/articles/:id', to: 'categories#add_to_category'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
