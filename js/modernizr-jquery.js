Modernizr.load([
    {
        load: '//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js',
        complete: function () {
            if ( !window.jQuery ) {
                Modernizr.load('js/jquery-1.7.1.min.js');
            }
        }
    }
]);