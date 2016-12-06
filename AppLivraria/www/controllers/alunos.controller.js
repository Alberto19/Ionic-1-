(function () {
  'use strict';

  angular
    .module('main')
    .controller('AlunosController', AlunosController);

  function AlunosController($scope, $ionicModal, $ionicPopup, $localStorage) {
    $scope.Aluno = {
      nome: "",
      idade: "",
      telefone: "",
      serie: "",
      buscar: ""
    };

    $scope.editando = false;
    var auxAlunoEditar;
    $scope.botaoDeletarProduto = false;
    $scope.local = $localStorage;


     var init = function(){
       if(!$scope.local.alunos){
         $scope.local.alunos = alunosPadrao;
         $scope.alunos = $scope.local.alunos;
       }else{
          $scope.alunos = $scope.local.alunos;
       }
     }
    var alunosPadrao = [];

    $ionicModal.fromTemplateUrl('templates/alunos/new.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.abreAdicionar = function () {
      $scope.editando = false;
      $scope.Aluno.nome = null;
      $scope.Aluno.idade = null;
      $scope.Aluno.telefone = null;
      $scope.Aluno.serie = null;
      $scope.modal.show();
    }

    $scope.addAluno = function (Aluno) {
      if (!validacao(Aluno)) {
        return;
      }
      $scope.alunos.push({
        nome: Aluno.nome,
        idade: Aluno.idade,
        telefone: Aluno.telefone,
        serie: Aluno.serie
      });
      Aluno.nome = null;
      Aluno.idade = null;
      Aluno.telefone = null;
      Aluno.serie = null;
      $scope.modal.hide();
    };

    $scope.editarAluno = function (AlunoEditar) {
      $scope.editando = true;
      $scope.Aluno.nome = AlunoEditar.nome;
      $scope.Aluno.idade = AlunoEditar.idade;
      $scope.Aluno.telefone = AlunoEditar.telefone;
      $scope.Aluno.serie = AlunoEditar.serie;
      auxAlunoEditar = AlunoEditar;
      $scope.modal.show();
    };

    $scope.salvarAluno = function (Aluno) {
      auxAlunoEditar.nome = Aluno.nome;
      auxAlunoEditar.idade = Aluno.idade;
      auxAlunoEditar.telefone = Aluno.telefone;
      auxAlunoEditar.serie = Aluno.serie;
      $scope.modal.hide();
    };

    $scope.deletarAluno = function (Aluno) {
      for (var i in $scope.alunos) {
        var aux = $scope.alunos[i];
        if (Aluno === aux) {
          $scope.alunos.splice(i, 1);
        }
      }
    };
    var validacao = function (Aluno) {
      var texto = "";
      var erro = false;
      if (Aluno.nome === null) {
        erro = true;
        texto += '<p>Preencha o Nome do aluno</p>'
      }
      if (Aluno.serie === null) {
        erro = true;
        texto += '<p>Preencha a Série</p>'
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

    $scope.buscarAluno = function(Aluno){
        if(Aluno.nome){
            return Aluno.nome;
        }
    }

    init();
  }
})();

