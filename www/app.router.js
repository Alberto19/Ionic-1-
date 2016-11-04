(function () {
  'use strict';

  angular.module('starter', [
    'ionic'
  ]).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app',{
      url:'/app',
      abstract: true,
      templateUrl: 'template/layout.html',
      controller: 'AppController',
      controllerAs:'vm'
    })
      .state('app.form', {
         url: '/form',
        views:{
          'layout':{
             templateUrl: 'template/form.html'
          }
        }
      })




    $urlRouterProvider.otherwise('/app/form');
  });
})();
