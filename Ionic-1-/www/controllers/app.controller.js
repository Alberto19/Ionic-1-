(function () {
  'use strict';

  angular
    .module('starter')
    .controller('AppController', AppController);

  function AppController( $scope,$ionicModal) {
     var vm = this;
     vm.contato = null;
     vm.contatos = null;

     vm.abreModal = abreModal;
     vm.addContato = addContato;

   vm.contatos = [{
      nome: "junior",
      email: "junior@ht.com"
    }, {
      nome: "alex",
      email: "junior@ht.com"
    }, {
      nome: "mauro",
      email: "junior@ht.com"
    }, {
      nome: "nao",
      email: "junior@ht.com"
    }, {
      nome: "sei",
      email: "junior@ht.com"
    }];
   

    $ionicModal.fromTemplateUrl('template/modal.html', {
      scope:$scope
    }).then(function (modal) {
     vm.modal = modal;
    });

    function abreModal() {
     vm.modal.show();
    }

    function addContato(contato) {
     vm.contatos.push({
        nome: contato.nome,
        email: contato.email
      });
     vm.modal.hide();
    }

  }
})();
