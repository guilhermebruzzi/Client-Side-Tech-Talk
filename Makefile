#  Para colocar na pasta certa no linux

root_dir		= $(realpath .)

minify_js:
	@java -jar yuicompressor-2.4.7.jar js/index.js -o js/index-min.js --charset utf-8

minify_css:
	@java -jar yuicompressor-2.4.7.jar css/import.css -o css/import-min.css --charset utf-8

minify: minify_js minify_css

start: minify
	@sudo cp -rf ${root_dir} /var/www
