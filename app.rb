require 'sinatra'

get '/' do
  erb :index
end

get "/repo" do
  erb :repo
end
