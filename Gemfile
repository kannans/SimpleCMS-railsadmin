source 'https://rubygems.org'

gem 'rails', '3.2.13'
gem 'jquery-rails'
gem "thin"
gem 'rails_admin_glyph_theme', git: 'https://github.com/vala/rails_admin_glyph_theme.git'
gem 'rails_admin'
gem "devise"
gem 'rack-cache', :require => 'rack/cache'
gem 'dragonfly', '~>0.9.15'
gem "mini_magick"
group :production do
  gem 'pg'
end

group :development, :test do
  gem 'sqlite3'
end

group :assets do
  gem 'sass-rails',   '~> 3.2.5'
	gem 'compass'
	gem 'compass-rails'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'uglifier', '>= 1.0.3'
end
# =>