Rails.application.routes.draw do
  resources :posts
  resources :categories
  resources :users, only:[:create,:show, :index]
  post 'sessions' => 'sessions#create'
  delete 'logout' => 'sessions#destroy'
  get 'loggedin' => 'sessions#is_logged_in?'
  get 'myposts' =>'users#myPosts'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
