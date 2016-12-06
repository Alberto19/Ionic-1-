var app = angular.module('caffeinehit', [
  'ionic',
  'ngMap',
  'ngCordova',
  'caffeinehit.controllers',
  'caffeinehit.services',
  'caffeinehit.filters'
]);

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {

      StatusBar.styleDefault();
    }
  });
});

app.config(function ($httpProvider) {
  $httpProvider.defaults.headers.common['Authorization'] = 'Token e19d9be484524410a701aa65288e6023015e5018';
});
