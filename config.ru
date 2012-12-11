#

# deploy a static page on heroku

# ------------------------------

#

#

# required site structure:

#

# name-of-site

# |- config.ru

# |- index.html

# |- css

# |- js

# +- img

#

#

#

# deployment:

#

# git init

# ...

# heroku create <name-of-site>

# git push heroku master

#

#



use Rack::Static, :urls => ["/css", "/img", "/js"], :root => ""

run lambda { |env| [200, { 'Content-Type' => 'text/html', 'Cache-Control' => 'public, max-age=86400' }, File.open('index.html', File::RDONLY)] }


