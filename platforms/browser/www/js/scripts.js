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
    ]
});

var mainView = app.views.create('.view-main');
