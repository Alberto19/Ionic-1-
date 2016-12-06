(function () {
  'use strict';

  angular
    .module('main')
    .controller('HomeController', HomeController);


  function HomeController($scope, $ionicModal, $ionicPopup, $localStorage) {
    $scope.Produto = {
      titulo: "",
      valor: "",
      publicar: false
    };
    
    $scope.editando = false;
    var auxProdutoEditar;
     $scope.botaoDeletarProduto = false;
     $scope.local = $localStorage;

     var init = function(){
       if(!$scope.local.produtos){
         $scope.local.produtos = produtosPadrao;
         $scope.produtos = $scope.local.produtos;
       }else{
          $scope.produtos = $scope.local.produtos;
       }
     }

    var produtosPadrao = [{
        titulo: 'Livro de Ionic',
        valor: 12,
        publicar: false
      }, {
        titulo: 'Livro de Ionic',
        valor: 12,
        publicar: true
      }, {
        titulo: 'Livro de Ionic',
        valor: 12,
        publicar: true
      },

    ];

    $ionicModal.fromTemplateUrl('templates/adicionar.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.abreAdicionar = function () {
      $scope.editando = false;
      $scope.Produto.titulo = null;
      $scope.Produto.valor = null;
      $scope.Produto.publicar = false;
      $scope.modal.show();
    }

    $scope.addProduto = function (Produto) {
      if (!validacao(Produto)) {
        return;
      }
      $scope.produtos.push({
        titulo: Produto.titulo,
        valor: Produto.valor,
        publicar: Produto.publicar
      });
      Produto.titulo = null;
      Produto.valor = null;
      Produto.publicar = false;
      $scope.modal.hide();
    };

    $scope.editarProduto = function (ProdutoEditar) {
      $scope.editando = true;
      $scope.Produto.titulo = ProdutoEditar.titulo;
      $scope.Produto.valor = ProdutoEditar.valor;
      $scope.Produto.publicar = ProdutoEditar.publicar;
      auxProdutoEditar = ProdutoEditar;
      $scope.modal.show();
    };

    $scope.salvarProduto = function (Produto) {
      auxProdutoEditar.titulo = Produto.titulo;
      auxProdutoEditar.valor = Produto.valor;
      auxProdutoEditar.publicar = Produto.publicar;
      $scope.modal.hide();
    };

    $scope.deletarProduto = function (Produto) {
      for (var i in $scope.produtos) {
        var aux = $scope.produtos[i];
        if (Produto === aux) {
          $scope.produtos.splice(i, 1);
        }
      }
    };

    var validacao = function (Produto) {
      var texto = "";
      var erro = false;
      if (Produto.titulo === null) {
        erro = true;
        texto += '<p>Preencha um título válido</p>'
      }
      if (Produto.valor === null) {
        erro = true;
        texto += '<p>Preencha um valor válido</p>'
      }
      if (erro) {
        var alertPopup = $ionicPopup.alert({
          title: 'Erro no formulário',
          template: texto
        });
        return false;
      } else {
        return true;
      }
    };
    init();
  }
})();
