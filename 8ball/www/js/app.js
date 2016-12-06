var app = angular.module('8ball', ['ionic'])

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


app.controller('PredictionController', function ($scope, $timeout) {

  var predictionList = [
    "Sim, faça isso!!!",
    "Sim",
    "Codigo ruim esse",
    "Sem problemas",
    "Inteligencia Artificial quando?",
    "Eu estou vendo isso.",
    "Talvez",
    "Concentre se e pergunte novamente",
    "Sim, IOS não presta",
    "Palmeiras não tem mundial",
    "Bom, Agora faça",
    "Muito bem",
    "Com certeza!",
    "pergunte novamente",
    "Problema seu isso ai",
    "Quem sabe?",
    "Não sou o google"
  ];

  $scope.prediction = "Faça uma pergunta";
  $scope.resposta = true;

  $scope.ask = function () {
    $scope.resposta = false;
    $scope.prediction = "Faça uma pergunta";
    $timeout(function () {
      $scope.prediction = predictionList[Math.floor(Math.random() * predictionList.length)];
      $scope.resposta = true;
    }, 2000);

  }
});
