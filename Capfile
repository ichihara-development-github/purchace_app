require 'capistrano/setup'
require 'capistrano/deploy'
require "capistrano/scm/git"
require 'capistrano/rbenv'
require 'capistrano/bundler'
require 'capistrano/rails/assets'
require 'capistrano/rails/migrations'
require 'whenever/capistrano'
require 'capistrano3/unicorn'

# Load custom tasks from `lib/capistrano/tasks` if you have any defined


Dir.glob('lib/capistrano/tasks/*.rb').each { |r| import r }
