(function () {
  'use strict';

  angular.module('main.router', [

  ]).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html'
    })


    .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
          }
        }
      })
      .state('app.alunos', {
        url: '/alunos',
        views: {
          'menuContent': {
            templateUrl: 'templates/alunos/list.html',
            controller: 'AlunosController'
          }
        }
      }).state('app.emprestimo', {
        url: '/emprestimo',
        views: {
          'menuContent': {
            templateUrl: 'templates/emprestimo/new.html',
            controller: 'AlunosController'
          }
        }
      });

    $urlRouterProvider.otherwise('/app/home');
  });
})();
