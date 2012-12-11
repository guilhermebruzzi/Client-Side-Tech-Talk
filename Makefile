#  Para colocar na pasta certa no linux

root_dir		= $(realpath .)

minify_js:
	@cat js/*-polyfill.js | java -jar yuicompressor-2.4.7.jar --type js --charset utf-8 -o js/polyfill-min.js
	@cat js/modernizr-polyfill.js js/index.js | java -jar yuicompressor-2.4.7.jar --type js --charset utf-8 -o js/index-min.js

minify_css:
	@java -jar yuicompressor-2.4.7.jar css/import.css -o css/import-min.css --charset utf-8

minify: minify_js minify_css

start: minify
	@sudo cp -rf ${root_dir} /var/www # Caso esteja rodando com o apache
