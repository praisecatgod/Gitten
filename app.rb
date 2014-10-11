require 'sinatra'

get '/' do
  erb :index
end

get "/repo" do
  erb :repo
end


get "/home" do
  erb :home
end

get "/repo2" do
  erb :repo2
end
