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
});

var $$ = Dom7;

$$('.set-inline-progress').on('click', function (e) {
  var progress = $$(this).attr('data-progress');
  app.progressbar.set('#demo-inline-progressbar', progress);
});

determinateLoading = false;
function showDeterminate(inline) {
  determinateLoading = true;
  var progressBarEl;
  if (inline) {
    // inline progressbar
    progressBarEl = app.progressbar.show('#demo-determinate-container', 0);
  } 
  var progress = 0;
  function simulateLoading() {
    setTimeout(function () {
      var progressBefore = progress;
      progress += Math.random() * 20;
      app.progressbar.set(progressBarEl, progress);
      if (progressBefore < 100) {
        simulateLoading(); //keep "loading"
      }
      else {
        determinateLoading = false;
        app.progressbar.hide(progressBarEl); //hide
      }
    }, Math.random() * 200 + 200);
  }
  simulateLoading();
}
// show inline determinate progressbar
$$('.show-determinate').on('click', function (e) {
  showDeterminate(true);
});


var mainView = app.views.create('.view-main');

