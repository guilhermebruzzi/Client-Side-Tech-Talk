if(typeof(Modernizr)!=="undefined"){
    Modernizr.load({
        test: Modernizr.localstorage,
        nope: 'polyfill-min.js'
    });
}
