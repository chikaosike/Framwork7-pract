var app = new Framework7({
    root: "#app",
    /* app element */
    routes: [
        {
            path: '/',
            url: 'index.html',
        },
        {
            path: '/page2/',
            url: 'pages/page2.html',
        },
        {
            path: '/page3/',
            url: 'pages/page3.html',
        },
    ]
//    animateNavBackIcon:true
});

var $$ = Dom7;

var mainView = app.addView('.view-main', {
            // enable the dynamic navbar for this view
            dynamicNavbar: true
         });

var smartSelect = app.smartSelect.get('.smart-select');
//var mainView = app.views.create('.view-main');

