if(typeof(Modernizr)!=="undefined"){
	Modernizr.load(
		{
			test: Modernizr.localstorage,
			nope : 'js/polyfill-min.js',
			complete: function () {
			  main();
			}
		}
	);
}
else{
    main();
}
